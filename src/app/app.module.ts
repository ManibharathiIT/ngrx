import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Store, StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosReducer } from './store/reducers/todo.reducer';
import { TodoListComponent } from './components/todo-list/todo-list.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({todos:TodosReducer}),
    StoreDevtoolsModule.instrument({
      maxAge:25
    })
  ],
  providers: [
    {provide:Store}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
