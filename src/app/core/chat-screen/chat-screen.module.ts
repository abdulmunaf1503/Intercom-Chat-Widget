import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ChatScreenComponent } from './chat-screen.component';


const router: Route[] = [
  {
      path     : '',
      component: ChatScreenComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
  ]
})
export class ChatScreenModule { }
