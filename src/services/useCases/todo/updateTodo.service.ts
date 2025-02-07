import { BadRequestException, Injectable } from '@nestjs/common';
import { TodoResponse } from 'src/domain/todo/dto/todo-response.dto';
import { TodoUpdateRequest } from 'src/domain/todo/dto/todo-update.dto';
import { TodoRepository } from '../../../infrastructure/repositories/todo/todo.repository';

@Injectable()
export class UpdateTodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async updateTodo(
    id: number,
    request: TodoUpdateRequest,
  ): Promise<TodoResponse> {
    try {
      return await this.todoRepository.update(id, request);
    } catch {
      throw new BadRequestException('Ha ocurrido un error');
    }
  }
}
