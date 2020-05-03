import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/component/home/home.component';
import { UsuarioComponent } from './modules/usuario/usuario.component';
import { UsuarioAddComponent } from './modules/usuario/component/usuario-add/usuario-add.component';
import { UsuarioEditComponent } from './modules/usuario/component/usuario-edit/usuario-edit.component';
import { UsuarioDelComponent } from './modules/usuario/component/usuario-del/usuario-del.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'usuario', component: UsuarioComponent },
      { path: 'usuario-add', component: UsuarioAddComponent },
      { path: 'usuario-edit/:id', component: UsuarioEditComponent },
      { path: 'usuario-del/:id', component: UsuarioDelComponent }
    ]
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
