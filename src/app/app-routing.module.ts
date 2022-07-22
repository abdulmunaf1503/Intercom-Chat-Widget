import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: "", redirectTo: "splashscreen", pathMatch: "full" },

 {
  path: 'splashscreen',
  pathMatch: 'full',
  loadChildren: () => import('../app/core/splash-screen/splash-screen.module').then(m => m.SplashScreenModule)
},
{
  path: 'homescreen',
  pathMatch: 'full',
  data: {animation: 'homescreen'},
  loadChildren: () => import('../app/core/home-screen/home-screen.module').then(m => m.HomeScreenModule)
},
{
  path: 'chatscreen',
  pathMatch: 'full',
  data: {animation: 'chatscreen'},
  loadChildren: () => import('../app/core/chat-screen/chat-screen.module').then(m => m.ChatScreenModule)
},

// 404 & Catch all
// {
//   path: '404-not-found',
//   pathMatch: 'full',
//   loadChildren: () => import('app/modules/error/error-404/error-404.module').then(m => m.Error404Module)
// },
{
  path: '**',
  redirectTo: '404-not-found'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
