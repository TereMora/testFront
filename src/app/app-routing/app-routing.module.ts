import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ROUTER_INITIALIZER } from '@angular/router';
import { UsersComponent } from '../components/users/users.component';
import { FormularioComponent } from '../components/formulario/formulario.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent},
  { path: 'form', component: FormularioComponent},
  { path: '**', component: UsersComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
