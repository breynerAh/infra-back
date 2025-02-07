import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from 'src/domain/todo/todo.entity';
import { TodoRepository } from 'src/infrastructure/repositories/todo/todo.repository';
import { TodoController } from 'src/presentation/controllers/todo/todo.controller';
import { SERVICES_USE_CASES } from 'src/services/useCases';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])], // ✅ Necesario para usar InjectRepository
  controllers: [TodoController],
  providers: [TodoRepository, ...SERVICES_USE_CASES],
  exports: [...SERVICES_USE_CASES],
})
export class TodoModule {}
