import { Todo } from 'src/domain/todo/todo.entity';
import { TodoRepository } from '../../../infrastructure/repositories/todo/todo.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetAllTodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async getAllTodo(): Promise<Todo[]> {
    const result = await this.todoRepository.findAll();
    console.log(result);
    return result;
  }
}
