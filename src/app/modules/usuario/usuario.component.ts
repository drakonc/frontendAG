import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { UsuarioI } from '../../shared/models/usuario.interface';
import { Observable } from 'rxjs';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import swal from 'sweetalert2';
import { UsuarioVM } from 'src/app/shared/models/ViewModel/usuario.viewmodel';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuario$: Observable<UsuarioI[]>;
  public usuarios: UsuarioI[];
  public users: UsuarioVM[] = [];
  dataTable: any;

  constructor(private readonly usuarioService: UsuarioService, private chRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getAllUsuarios();
  }

  getAllUsuarios() {
    this.usuario$ = this.usuarioService.getAllUsers();
    this.usuario$.subscribe(
      (res) => {
        this.usuarios = res;
        this.usuarios.forEach(valor => {
          const user: UsuarioVM = {
            id: valor.id,
            nombre: valor.nombre,
            apellido: valor.apellido,
            username: valor.username,
            password: valor.password,
            correo: valor.correo,
            fecha: valor.createdDate.split(' ')[0],
            hora: valor.createdDate.split(' ')[1],
          };
          this.users.push(user);
        });
        this.chRef.detectChanges();
        const table: any = $('#dtUsuario');
        this.dataTable = table.DataTable({
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
      (err) => console.log(err),
    );
  }

  deleteUsuario(event, id) {
    swal.fire({
      title: 'Estas Seguro?',
      text: 'Seguro que quieres eliminar el Usuario!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminar!',
      cancelButtonText: 'No, Cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        swal.fire(
          'Eliminado!',
          '',
          'success'
        );
      } else if (result.dismiss === swal.DismissReason.cancel) {
        swal.fire(
          'Cancelado',
          '',
          'error'
        );
      }
    });
  }
}
