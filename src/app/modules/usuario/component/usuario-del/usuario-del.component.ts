import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from '../../usuario.service';
import { ErrorI } from '../../../../shared/models/error/error.interface';

import swal from 'sweetalert2'

@Component({
  selector: 'app-usuario-del',
  templateUrl: './usuario-del.component.html'
})
export class UsuarioDelComponent implements OnInit {

  private id: number;
  private error: ErrorI;


  constructor(
    private readonly usuarioSerice: UsuarioService, private readonly route: Router, private readonly toastr: ToastrService,
    private readonly avRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.avRoute.snapshot.params.id;
    swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.usuarioSerice.deleteUsuario(this.id).subscribe(
          () => {
            this.toastr.success(`Usuario Eliminado Satisfactoriamente `, 'Success');
          },
          (error) => {
            this.error = error.error;
            this.toastr.error(`${this.error.message}`, 'Error');
          }
        );
        this.route.navigate(['/usuario']);
      } else {
        this.route.navigate(['/usuario']);
      }
    })
  }

}
