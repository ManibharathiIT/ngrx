import { createAction,props } from "@ngrx/store";
import { Todo } from "src/app/modals/todo.modal";

export const addTodo=createAction(
    '[Todos] Add Todo',
    props<{todo:Todo}>()
);

export const toggleTodo=createAction(
    '[Todos] Toggle Todo',
    props<{id:string}>()
);
export const removeTodo=createAction(
    '[Todos] Remove Todo',
    props<{id:string}>()
);
