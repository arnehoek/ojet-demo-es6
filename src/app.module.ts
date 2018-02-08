import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import {TodoController} from './controllers/todo.controller';
import {MiddlewaresConsumer} from '@nestjs/common/interfaces/middlewares';
import {CorsMiddleware} from './cors-middleware';

@Module({
  imports: [],
  controllers: [AppController, TodoController],
  components: [],
})
export class ApplicationModule {
  configure(consumer: MiddlewaresConsumer): void {
    consumer.apply(CorsMiddleware).forRoutes(TodoController);
  }
}
