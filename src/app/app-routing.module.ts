import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
    { path: 'facesnaps', component: FaceSnapListComponent },
    { path: '', component: LandingPageComponent },
    { path: 'todolist', component: TodoListComponent },
    
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(routes),
    ],
    exports: [
      RouterModule
    ]
  })
export class AppRoutingModule {}