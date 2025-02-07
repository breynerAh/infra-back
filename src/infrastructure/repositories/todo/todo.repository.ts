import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from 'src/domain/todo/todo.entity';
import {
  DeepPartial,
  FindManyOptions,
  InsertResult,
  Repository,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@Injectable()
export class TodoRepository {
  constructor(
    @InjectRepository(Todo)
    private readonly repository: Repository<Todo>,
  ) {}

  async findAll(options?: FindManyOptions<Todo>): Promise<Todo[]> {
    try {
      return await this.repository.find(options);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error';
      throw new HttpException(errorMessage, 500);
    }
  }

  async create(request: DeepPartial<Todo>): Promise<Todo> {
    try {
      const result: InsertResult = await this.repository.insert(request);
      const newTodo = await this.repository.findOne({
        where: { id: result.identifiers[0].id as number },
      });
      if (!newTodo) {
        throw new HttpException('No se pudo recuperar el registro', 500);
      }
      return newTodo;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error';
      throw new HttpException(errorMessage, 500);
    }
  }

  async update(
    id: number,
    request: QueryDeepPartialEntity<Todo>,
  ): Promise<Todo> {
    try {
      await this.repository.update(id, request);
      const updatedTodo = await this.repository.findOne({ where: { id } });
      if (!updatedTodo) {
        throw new HttpException(
          'No se pudo recuperar el registro actualizado',
          500,
        );
      }
      return updatedTodo;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error';
      throw new HttpException(errorMessage, 500);
    }
  }

  async remove(id: number): Promise<string> {
    try {
      const deleteTodo = await this.repository.findOne({ where: { id } });
      if (!deleteTodo) {
        throw new HttpException('No se pudo recuperar el registro', 500);
      }
      await this.repository.delete(id);
      return 'Eliminación exitosa';
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error';
      throw new HttpException(errorMessage, 500);
    }
  }

  async delete(id: number): Promise<Todo> {
    try {
      const deleteTodo = await this.repository.findOne({ where: { id } });
      if (!deleteTodo) {
        throw new HttpException('No se pudo recuperar el registro', 500);
      }
      await this.repository.softDelete(id);
      return deleteTodo;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error';
      throw new HttpException(errorMessage, 500);
    }
  }
}
