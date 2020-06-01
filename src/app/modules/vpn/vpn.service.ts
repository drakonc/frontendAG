import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Loggerin } from '../../shared/models/loggerin/logger-in';
import { ReadeVpnI, CreateVpnI, UpdateVpnI } from './models/index';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VpnService {

  private API: string = environment.api;
  private loggerin: Loggerin;

  constructor(private readonly http: HttpClient) { }

  getAllVpn(): Observable<ReadeVpnI[]> {
    this.loggerin = JSON.parse(localStorage.getItem('usuario'));
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.loggerin.token}`
    });
    const HttpOptions = { headers };
    return this.http.get<ReadeVpnI[]>(this.API + 'vpn', HttpOptions);
  }

  getOneVpn(vpnId: number): Observable<ReadeVpnI> {
    this.loggerin = JSON.parse(localStorage.getItem('usuario'));
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.loggerin.token}`
    });
    const HttpOptions = { headers };
    return this.http.get<ReadeVpnI>(this.API + 'vpn/' + vpnId, HttpOptions);
  }

  createVpn(newVPN: CreateVpnI): Observable<ReadeVpnI> {
    this.loggerin = JSON.parse(localStorage.getItem('usuario'));
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.loggerin.token}`
    });
    const HttpOptions = { headers };
    return this.http.post<ReadeVpnI>(this.API + 'vpn/crearVpn', newVPN, HttpOptions);
  }

  editVpn(vpnId: number, vpn: UpdateVpnI): Observable<ReadeVpnI> {
    this.loggerin = JSON.parse(localStorage.getItem('usuario'));
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.loggerin.token}`
    });
    const HttpOptions = { headers };
    return this.http.put<ReadeVpnI>(this.API + 'vpn/updateVpn/' + vpnId, vpn, HttpOptions);
  }

  eliminarVpn(vpnId: number): Observable<ReadeVpnI> {
    this.loggerin = JSON.parse(localStorage.getItem('usuario'));
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.loggerin.token}`
    });
    const HttpOptions = { headers };
    return this.http.delete<ReadeVpnI>(this.API + 'vpn/deleteVpn/' + vpnId, HttpOptions);
  }

}
