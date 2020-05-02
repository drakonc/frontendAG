import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CreateUsuarioI } from './models';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private API: string = environment.api;

  constructor(private readonly http: HttpClient) { }

  getAllUsuarios() {
    return this.http.get(this.API + 'usuario');
  }

  getOneUsuario(userId: number) {
    return this.http.get(this.API + 'usuario/' + userId);
  }

  getAllRol() {
    return this.http.get(this.API + 'role/rolesActive');
  }

  createUsuario(newUsuario: CreateUsuarioI) {
    return this.http.post(this.API + 'usuario/crearUsuario', newUsuario);
  }
}
