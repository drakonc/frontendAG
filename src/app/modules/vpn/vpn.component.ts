import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { VpnService } from './vpn.service';
import { ReadeVpnI } from './models/index';
import { ToastrService } from 'ngx-toastr';
import { ErrorI } from '../../shared/models/error/error.interface';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-vpn',
  templateUrl: './vpn.component.html',
  styleUrls: ['./vpn.component.css']
})
export class VpnComponent implements OnInit {

  public error: ErrorI;
  public readVpn: ReadeVpnI[] = [];
  public table: any;
  public dataTable: any;

  constructor(
    private readonly vpnSerice: VpnService, private chRef: ChangeDetectorRef, private readonly toastr: ToastrService,
    private readonly router: Router, private readonly cookieService: CookieService
  ) { }

  ngOnInit(): void {
    if (localStorage.length === 0 && this.cookieService.check('Secret') === false && this.cookieService.check('UserNobre') === false && this.cookieService.check('UserApellido') === false && this.cookieService.check('RoleName') === false) {
      this.router.navigate(['/login']);
    }
    this.getAllVpn();
  }

  getAllVpn() {
    this.vpnSerice.getAllVpn().subscribe(
      (data) => {
        this.readVpn = data;
        this.chRef.detectChanges();
        this.table = $('#dtVpn');
        this.dataTable = this.table.DataTable({
          language: {
            decimal: '',
            emptyTable: 'No hay información',
            info: 'Mostrando _START_ a _END_ de _TOTAL_ Entradas',
            infoEmpty: 'Mostrando 0 to 0 of 0 Entradas',
            infoFiltered: '(Filtrado de _MAX_ total entradas)',
            infoPostFix: '',
            thousands: ',',
            lengthMenu: 'Mostrar _MENU_ Entradas',
            loadingRecords: 'Cargando...',
            processing: 'Procesando...',
            search: 'Buscar:',
            zeroRecords: 'Sin resultados encontrados',
            paginate: {
              first: 'Primero',
              last: 'Ultimo',
              next: 'Siguiente',
              previous: 'Anterior'
            }
          }
        });
      },
      (err) => {
        this.error = err.error;
        this.toastr.error(`${this.error.message}`, 'Error');
      }
    );
  }

}
