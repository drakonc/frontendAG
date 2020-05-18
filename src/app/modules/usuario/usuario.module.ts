import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { UsuarioComponent } from './usuario.component';
import { AppRoutingModule } from '../../app-routing.module';
import { UsuarioAddComponent } from './component/usuario-add/usuario-add.component';
import { UsuarioEditComponent } from './component/usuario-edit/usuario-edit.component';
import { UsuarioService } from './usuario.service';
import { UsuarioDelComponent } from './component/usuario-del/usuario-del.component';



@NgModule({
  declarations: [UsuarioComponent, UsuarioAddComponent, UsuarioEditComponent, UsuarioDelComponent],
  imports: [CommonModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  providers: [UsuarioService, CookieService]
})
export class UsuarioModule { }
