import { CreateTodoService } from './todo/createTodo.service';
import { DeleteTodoService } from './todo/deleteTodo.service';
import { GetAllTodoService } from './todo/getAllTodo.service';
import { UpdateTodoService } from './todo/updateTodo.service';

export const SERVICES_USE_CASES = [
  GetAllTodoService,
  CreateTodoService,
  UpdateTodoService,
  DeleteTodoService,
];
