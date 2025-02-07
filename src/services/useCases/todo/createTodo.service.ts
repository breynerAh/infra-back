import { TodoRepository } from '../../../infrastructure/repositories/todo/todo.repository';
import { BadRequestException, Injectable } from '@nestjs/common';
import { TodoRequest } from 'src/domain/todo/dto/todo-request.dto';
import { TodoResponse } from 'src/domain/todo/dto/todo-response.dto';

@Injectable()
export class CreateTodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async createTodo(request: TodoRequest): Promise<TodoResponse> {
    try {
      return await this.todoRepository.create({ id: 1, ...request });
    } catch {
      throw new BadRequestException('Ha ocurrido un error');
    }
  }
}
