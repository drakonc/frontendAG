import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UsuarioComponent } from './usuario.component';
import { AppRoutingModule } from '../../app-routing.module';
import { UsuarioAddComponent } from './component/usuario-add/usuario-add.component';
import { UsuarioEditComponent } from './component/usuario-edit/usuario-edit.component';
import { UsuarioService } from './usuario.service';



@NgModule({
  declarations: [UsuarioComponent, UsuarioAddComponent, UsuarioEditComponent],
  imports: [CommonModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  providers: [UsuarioService]
})
export class UsuarioModule { }
