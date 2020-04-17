import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { UsuarioComponent } from './usuario.component';
import { UsuarioService } from './usuario.service';
import { UsuarioAddComponent } from './component/usuario-add/usuario-add.component';
import { UsuarioEditComponent } from './component/usuario-edit/usuario-edit.component';



@NgModule({
  declarations: [UsuarioComponent, UsuarioAddComponent, UsuarioEditComponent],
  imports: [CommonModule, AppRoutingModule],
  providers: [UsuarioService]
})
export class UsuarioModule { }
