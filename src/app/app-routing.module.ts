import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/component/home/home.component';
import { UsuarioComponent } from './modules/usuario/usuario.component';
import { UsuarioAddComponent } from './modules/usuario/component/usuario-add/usuario-add.component';
import { UsuarioEditComponent } from './modules/usuario/component/usuario-edit/usuario-edit.component';
import { UsuarioDelComponent } from './modules/usuario/component/usuario-del/usuario-del.component';
import { AuthGuard } from './auth/auth.guard';
import { RoleType } from './shared/enums/role.type.enum';
import { NoAuthComponent } from './page/no-auth/no-auth.component';
import { NoFountComponent } from './page/no-fount/no-fount.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'usuario', component: UsuarioComponent, canActivate: [AuthGuard], data: { roles: [RoleType.Administrador] } },
      { path: 'usuario-add', component: UsuarioAddComponent, canActivate: [AuthGuard], data: { roles: [RoleType.Administrador] } },
      { path: 'usuario-edit/:id', component: UsuarioEditComponent, canActivate: [AuthGuard], data: { roles: [RoleType.Administrador] } },
      { path: 'usuario-del/:id', component: UsuarioDelComponent, canActivate: [AuthGuard], data: { roles: [RoleType.Administrador] } }
    ]
  },
  { path: 'noAuth', component: NoAuthComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NoFountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
