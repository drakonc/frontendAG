import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { ReadeUsuarioI } from './models/index';
import { ToastrService } from 'ngx-toastr';
import { ErrorI } from '../../shared/models/error/error.interface';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public error: ErrorI;
  private usersData: any = [];
  public readUsers: ReadeUsuarioI[] = [];
  public table: any;
  public dataTable: any;


  constructor(
    private readonly usuarioSerice: UsuarioService, private chRef: ChangeDetectorRef, private readonly toastr: ToastrService,
    private readonly router: Router, private readonly cookieService: CookieService
  ) { }

  ngOnInit(): void {
    if (localStorage.length === 0 && this.cookieService.check('Secret') === false && this.cookieService.check('UserNobre') === false && this.cookieService.check('UserApellido') === false && this.cookieService.check('RoleName') === false) {
      this.router.navigate(['/login']);
    }
    this.getAllUsuarios();
  }

  getAllUsuarios() {
    this.usuarioSerice.getAllUsuarios().subscribe(
      (data) => {
        this.usersData = data;
        this.readUsers = this.usersData;
        this.chRef.detectChanges();
        this.table = $('#dtUsuario');
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
      (error) => {
        this.error = error.error;
        console.error('Entro En EL Error ', this.error);
      }
    );
  }

}
