import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeScreenComponent } from './home-screen.component';
import { Route, RouterModule } from '@angular/router';


const router: Route[] = [
  {
      path     : '',
      component: HomeScreenComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
  ]
})
export class HomeScreenModule { }
