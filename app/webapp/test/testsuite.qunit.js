sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: com.andew.todo",
		defaults: {
			page: "ui5://test-resources/com/andew/todo/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			sinon: {
				version: 1
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "com/andew/todo/",
				never: "test-resources/com/andew/todo/"
			},
			loader: {
				paths: {
					"com/andew/todo": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for com.andew.todo"
			},
			"integration/opaTests": {
				title: "Integration tests for com.andew.todo"
			}
		}
	};
});
