import { BadRequestException, Injectable } from '@nestjs/common';
import { TodoResponse } from 'src/domain/todo/dto/todo-response.dto';
import { TodoRepository } from '../../../infrastructure/repositories/todo/todo.repository';

@Injectable()
export class DeleteTodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async deleteTodo(id: number): Promise<TodoResponse> {
    try {
      return await this.todoRepository.delete(id);
    } catch {
      throw new BadRequestException('Ha ocurrido un error');
    }
  }
}
