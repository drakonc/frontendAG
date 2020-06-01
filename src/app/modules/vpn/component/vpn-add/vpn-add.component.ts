import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateVpnI } from '../../models';
import { VpnService } from '../../vpn.service';
import { ErrorI } from '../../../../shared/models/error/error.interface';
import { Loggerin } from '../../../../shared/models/loggerin/logger-in';

@Component({
  selector: 'app-vpn-add',
  templateUrl: './vpn-add.component.html',
  styleUrls: ['./vpn-add.component.css']
})
export class VpnAddComponent implements OnInit {

  public vpnForm: FormGroup;
  private loggerin: Loggerin;
  public newUsuario: CreateVpnI = { nombre: '', password: '', grupos: '', username: '' };
  private error: ErrorI;

  createFormGroup() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
      password: new FormControl('', [Validators.required, Validators.minLength(2)]),
      grupos: new FormControl('', [Validators.required, Validators.minLength(2)]),
      username: new FormControl('')
    });
  }

  constructor(
    private readonly vpnSerice: VpnService, private readonly route: Router, private readonly toastr: ToastrService
  ) {
    this.vpnForm = this.createFormGroup();
  }

  get nombre() { return this.vpnForm.get('nombre'); }
  get password() { return this.vpnForm.get('password'); }
  get grupos() { return this.vpnForm.get('grupos'); }
  get username() { return this.vpnForm.get('username'); }

  ngOnInit(): void {
    this.onResetForm();
    this.loggerin = JSON.parse(localStorage.getItem('usuario'));
    this.newUsuario.username = this.loggerin.user.username;
    this.vpnForm.updateValueAndValidity();
  }

  onResetForm() {
    this.vpnForm.reset();
  }

  onSaveForm() {
    if (this.vpnForm.valid) {
      this.newUsuario = this.vpnForm.value;
      this.vpnSerice.createVpn(this.newUsuario).subscribe(
        (data) => {
          this.onResetForm();
          this.toastr.success(`Vpn: ${data.nombre} Creada Exitosamente`, 'Success');
          this.route.navigate(['/vpn']);
        },
        (error) => {
          this.error = error.error;
          this.toastr.error(`${this.error.message}`, 'Error');
        }
      );
    }
  }

}
