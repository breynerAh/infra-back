import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './domain/todo/todo.entity';
import { TodoModule } from './infrastructure/repositories/todo/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'postgres',
      entities: [Todo],
      synchronize: true,
    }),
    TodoModule,
  ],
  controllers: [],
  providers: [],
})
@Global()
export class AppModule {}
