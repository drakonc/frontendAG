import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CreateUsuarioI } from './models';
import { UpdateUsuarioI } from './models/update-usuario.interface';
import { Loggerin } from '../../shared/models/loggerin/logger-in';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private API: string = environment.api;
  private loggerin: Loggerin;


  constructor(private readonly http: HttpClient) { }

  getAllUsuarios() {
    this.loggerin = JSON.parse(localStorage.getItem('usuario'));
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.loggerin.token}`
    });
    const HttpOptions = { headers };
    return this.http.get(this.API + 'usuario', HttpOptions);
  }

  getOneUsuario(userId: number) {
    this.loggerin = JSON.parse(localStorage.getItem('usuario'));
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.loggerin.token}`
    });
    const HttpOptions = { headers };
    return this.http.get(this.API + 'usuario/' + userId, HttpOptions);
  }

  getAllRol() {
    this.loggerin = JSON.parse(localStorage.getItem('usuario'));
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.loggerin.token}`
    });
    const HttpOptions = { headers };
    return this.http.get(this.API + 'role/rolesActive', HttpOptions);
  }

  createUsuario(newUsuario: CreateUsuarioI) {
    this.loggerin = JSON.parse(localStorage.getItem('usuario'));
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.loggerin.token}`
    });
    const HttpOptions = { headers };
    return this.http.post(this.API + 'usuario/crearUsuario', newUsuario, HttpOptions);
  }

  updateUsuario(usuarioId: number, usuario: UpdateUsuarioI) {
    this.loggerin = JSON.parse(localStorage.getItem('usuario'));
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.loggerin.token}`
    });
    const HttpOptions = { headers };
    return this.http.put(`${this.API}usuario/updateUsuario/${usuarioId}`, usuario, HttpOptions);

  }

  deleteUsuario(usuarioId: number) {
    this.loggerin = JSON.parse(localStorage.getItem('usuario'));
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.loggerin.token}`
    });
    const HttpOptions = { headers };
    return this.http.delete(this.API + 'usuario/deleteUsuario/' + usuarioId, HttpOptions);
  }

}
