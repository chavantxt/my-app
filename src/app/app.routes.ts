import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
   { path:'' , component:HomeComponent},
   {path :'list', component:ListComponent},

]; 

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})

export class AppRoutingModule{  }