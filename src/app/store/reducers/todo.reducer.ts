import { createReducer,on } from "@ngrx/store";
import {addTodo,toggleTodo,removeTodo} from "../action/todo.action";
import { Todo } from "src/app/modals/todo.modal";

export interface TodosState{
    todos:Todo[];
}

export const initialState:TodosState={
    todos:[
        {
            id:'1',
            title:'Todo 1',
            completed:false,
            userId:1
        }
    ],
}; 

export const TodosReducer=createReducer(
    initialState,
    on(addTodo,(state,{todo})=>({
        ...state,
        todos:[...state.todos,todo]
    })),
    on(removeTodo,(state,{id})=>({
        ...state,
        todos:state.todos.filter((todo)=>todo.id!==id),
    })),
    on(toggleTodo,(state,{id})=>({
        ...state,
        todos:state.todos.map((todo)=>todo.id===id? {...todo,completed:!todo.completed}:todo),
    }))
)