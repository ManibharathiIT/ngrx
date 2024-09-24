import { Component } from '@angular/core';
import { Todo } from 'src/app/modals/todo.modal';
import { Store } from '@ngrx/store';
import {addTodo,toggleTodo,removeTodo} from 'src/app/store/action/todo.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos$!:Todo[];
  newTodoTitle='';
    constructor(private store:Store<{todos:{todos:Todo[]}}>){
      store.select('todos').subscribe((todosState:{todos:Todo[]})=>{
        this.todos$=todosState.todos;
        console.log(this.todos$);
      })
    }
    
     addTodo():void{
      if(this.newTodoTitle.trim()===''){
        return;
      }
      const todo:Todo={
        id:Date.now().toString(),
        title:this.newTodoTitle,
        completed:false,
        userId:1,
      }
      this.store.dispatch(addTodo({todo}));
      this.newTodoTitle='';
     }
    toggleTodo(id:string):void{
      this.store.dispatch(toggleTodo({id}));
    }
    removeTodo(id:string):void{
      this.store.dispatch(removeTodo({id}));
    }
}
