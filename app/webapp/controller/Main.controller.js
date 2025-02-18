sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
	"sap/m/MessageBox"
  ], function (Controller) {
    "use strict";
    return Controller.extend("com.example.todo.controller.Tasks", {
	//Intialization Function 
      onInit: function () {
		console.log("Tasks list loaded!")

		//Create the oModel object
        const oModel = new sap.ui.model.odata.v4.ODataModel({
			//Specify the URL of the service
          serviceUrl: "/odata/v4/todo/"
        });

		//Assign the oModel to current view
        this.getView().setModel(oModel);
      },

	  //Update task state (Check/Uncheck)
	  onTaskToggle: function(oEvent){
		console.log("Task Toggle!")

		//Retrive the current list item using recived event
		const oListItem=oEvent.getSource().getBindingContext();

		//Get the oModel assigned to current view
		const oModel = this.getView().getModel();

		//Get the task object from list item
		const oTask= oListItem.getObject();

		//Reverse the boolean state
		oTask.isDone=!oTask.isDone;
		 // Update the task on the server
		 oModel.submitChanges({
			//In case of success call this
			success: function() {
				sap.m.MessageBox.success("Task updated successfully!");
			},
			//In case of fail call this
			error: function() {
				sap.m.MessageBox.error("Failed to update task!");
			}
		});
	},

	//INSERT a new task 
	onAddTask: function() {
		console.log("Add Task!");
	
		// Get current view item
		const oView = this.getView();

		// Get the input object
		const oInput = oView.byId("title_input");

		// Get the value inserted in the input object (The value of title)
		const sTitle = oInput.getValue();

		// Get the oModel assigned to current View
		const oModel = oView.getModel(); 
	
		//Check if user did not write a title before adding the task
		if (!sTitle) {
			sap.m.MessageBox.error("Please enter a task name");
			return;
		}
	
		// Ensure we are using an OData V4 model
		if (!(oModel instanceof sap.ui.model.odata.v4.ODataModel)) {
			sap.m.MessageBox.error("OData Model not found!");
			return;
		}
	
		// Bind to the "Task" entity set and create a new task
		oModel.bindList("/Task").create({
			title: sTitle,
			isDone: false
		});
	
		// Notify the user and clear input
		sap.m.MessageToast.show("Task added successfully!");
		 // Refresh the list to show the new task
		 this.getView().byId("taskList").getBinding("items").refresh();
		oInput.setValue("");
	},

	onDeleteTask: function (oEvent) {
		const oContext = oEvent.getSource().getBindingContext(); // Get binding context
	
		if (!oContext) {
			sap.m.MessageToast.show("Could not determine the task to delete.");
			return;
		}
	
		// Ask for confirmation before deleting
		sap.m.MessageBox.confirm("Are you sure you want to delete this task?", {
			actions: [sap.m.MessageBox.Action.OK, sap.m.MessageBox.Action.CANCEL],
			onClose: function (oAction) {
				if (oAction === sap.m.MessageBox.Action.OK) {
					oContext.delete().then(
						function () {
							sap.m.MessageToast.show("Task deleted successfully.");
						},
						function (oError) {
							sap.m.MessageBox.error("Failed to delete task. " + oError.message);
						}
					);
				}
			}
		});
	}
    });
  });
  
  