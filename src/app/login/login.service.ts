import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginI } from './model/login.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private API: string = environment.api;

  constructor(private readonly http: HttpClient) { }

  login(loginU: LoginI) {
    return this.http.post(this.API + 'auth/signin', loginU);
  }

}
