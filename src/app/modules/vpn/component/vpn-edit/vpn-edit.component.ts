import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { VpnService } from '../../vpn.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UpdateVpnI, ReadeVpnI } from '../../models';
import { ErrorI } from 'src/app/shared/models/error/error.interface';

@Component({
  selector: 'app-vpn-edit',
  templateUrl: './vpn-edit.component.html',
  styleUrls: ['./vpn-edit.component.css']
})
export class VpnEditComponent implements OnInit {

  public vpnForm: FormGroup;
  public vpn: ReadeVpnI = { id: 0, nombre: '', password: '', grupos: '', username: '', status: '' };
  public upVpn: UpdateVpnI = { password: '', grupos: '' };
  public id: number;
  private error: ErrorI;

  createFormGroup() {
    return new FormGroup({
      nombre: new FormControl(''),
      password: new FormControl('', [Validators.required, Validators.minLength(2)]),
      grupos: new FormControl('', [Validators.required, Validators.minLength(2)]),
    });
  }

  constructor(
    private readonly vpnSerice: VpnService, private readonly route: Router, private readonly toastr: ToastrService,
    private readonly avRoute: ActivatedRoute
  ) {
    this.vpnForm = this.createFormGroup();
  }

  get nombre() { return this.vpnForm.get('nombre'); }
  get password() { return this.vpnForm.get('password'); }
  get grupos() { return this.vpnForm.get('grupos'); }

  ngOnInit(): void {
    this.onResetForm();
    this.id = this.avRoute.snapshot.params.id;
    this.vpnForm.clearValidators();
    this.getUsuario();
    this.vpnForm.updateValueAndValidity();
  }

  onResetForm() {
    this.vpnForm.reset();
  }

  getUsuario() {
    this.vpnSerice.getOneVpn(this.id).subscribe(
      (data) => {
        this.vpn = data;
      },
      (error) => {
        this.error = error.error;
        this.toastr.error(`${this.error.message}`, 'Error');
      }
    );
  }

  onSaveForm() {
    if (this.vpnForm.valid) {
      this.vpn = this.vpnForm.value;
      this.upVpn.password = this.vpn.password;
      this.upVpn.grupos = this.vpn.grupos;
      this.vpnSerice.editVpn(this.id, this.upVpn).subscribe(
        (data) => {
          this.onResetForm();
          this.toastr.success(`Vpn: ${data.nombre} Modificada Exitosamente`, 'Success');
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
