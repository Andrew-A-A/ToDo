using db from '../db/schema';


service TodoService {
   entity Task as projection on db.Task; 
}

