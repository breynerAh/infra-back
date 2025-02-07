import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TodoRequest } from 'src/domain/todo/dto/todo-request.dto';
import { TodoResponse } from 'src/domain/todo/dto/todo-response.dto';
import { TodoUpdateRequest } from 'src/domain/todo/dto/todo-update.dto';
import { DeleteTodoService } from 'src/services/useCases/todo/deleteTodo.service';
import { UpdateTodoService } from 'src/services/useCases/todo/updateTodo.service';
import { CreateTodoService } from '../../../services/useCases/todo/createTodo.service';
import { GetAllTodoService } from '../../../services/useCases/todo/getAllTodo.service';

@Controller('todo')
@ApiTags('Todo')
export class TodoController {
  constructor(
    private readonly getAllTodoService: GetAllTodoService,
    private readonly createTodoService: CreateTodoService,
    private readonly updateTodoService: UpdateTodoService,
    private readonly deleteTodoService: DeleteTodoService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos todo' })
  async getAllTodo(): Promise<TodoResponse[]> {
    return await this.getAllTodoService.getAllTodo();
  }

  @Post('/create')
  @ApiOperation({ summary: 'Crear todo' })
  async createTodo(@Body() todoRequest: TodoRequest): Promise<TodoResponse> {
    return await this.createTodoService.createTodo(todoRequest);
  }

  @Put('/update/:id')
  @ApiOperation({ summary: 'Actualizar todo' })
  async updateTodo(
    @Param('id') id: number,
    @Body() todoRequest: TodoUpdateRequest,
  ): Promise<TodoResponse> {
    return await this.updateTodoService.updateTodo(id, todoRequest);
  }

  @Delete('/delete/:id')
  @ApiOperation({ summary: 'Eliminar todo' })
  async deleteTodo(@Param('id') id: number): Promise<TodoResponse> {
    return await this.deleteTodoService.deleteTodo(id);
  }
}
