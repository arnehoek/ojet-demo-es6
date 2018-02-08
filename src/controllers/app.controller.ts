import { Get, Controller } from '@nestjs/common';
import {TodoItem} from '../model/todo-item';

@Controller()
export class AppController {
	@Get()
	root(): string {
    return 'Hello World!';
  }
}
