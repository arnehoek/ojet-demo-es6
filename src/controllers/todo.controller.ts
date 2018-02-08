import {Get, Controller, Post, Body} from '@nestjs/common';
import {TodoItem} from '../model/todo-item';

@Controller()
export class TodoController {
	private todoItems: TodoItem[] = [
    {
      naam: 'item 1',
      omschrijving: 'example todo item'
    }
  ];

  @Get('/todo')
  todo(): TodoItem[] {
    return this.todoItems;
  }

  @Post('/todo/add')
  add(@Body() item: TodoItem): TodoItem[] {
    this.todoItems.push(item);
    return this.todoItems;
  }
}
