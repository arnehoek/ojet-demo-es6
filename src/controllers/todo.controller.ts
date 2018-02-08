import {Get, Controller, Post} from '@nestjs/common';
import {TodoItem} from '../model/todo-item';

@Controller()
export class TodoController {
    private todoItems: TodoItem[] = [
        {
            naam: 'item 2',
            omschrijving: 'omschrijving 2'
        },
        {
            naam: 'item 1',
            omschrijving: 'example todo item'
        },
        {
            naam: 'item 3',
            omschrijving: 'omschrijving 3'
        }
    ];

    @Get('/todo')
    todo(): TodoItem[] {
        return this.todoItems;
    }

    @Post('/todo/add')
    add(item: TodoItem): TodoItem[] {
        this.todoItems.push(item);
        return this.todoItems;
    }
}
