import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VpnService } from '../../vpn.service';
import { ErrorI } from '../../../../shared/models/error/error.interface';

import swal from 'sweetalert2';

@Component({
  selector: 'app-vpn-del',
  templateUrl: './vpn-del.component.html'
})
export class VpnDelComponent implements OnInit {

  private id: number;
  private error: ErrorI;


  constructor(
    private readonly vpnSerice: VpnService, private readonly route: Router, private readonly toastr: ToastrService,
    private readonly avRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.avRoute.snapshot.params.id;
    swal.fire({
      title: 'Estas Seguro?',
      text: 'Si Elimina no prodra recuperar el Usuario',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Estoy Seguro!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.vpnSerice.eliminarVpn(this.id).subscribe(
          (data) => {
            this.toastr.success(`Vpn ${data.nombre} Eliminado Satisfactoriamente `, 'Success');
          },
          (error) => {
            this.error = error.error;
            this.toastr.error(`${this.error.message}`, 'Error');
          }
        );
        this.route.navigate(['/vpn']);
      } else {
        this.route.navigate(['/vpn']);
      }
    });
  }

}
