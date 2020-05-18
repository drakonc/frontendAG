import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../usuario.service';
import { RolI } from '../../../../shared/models/rol/rol.interface';
import { ErrorI } from '../../../../shared/models/error/error.interface';
import { UpdateUsuarioI } from '../../models/update-usuario.interface';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  public usuarioForm: FormGroup;
  public id: number;
  private idRole: any;
  public rolId: number;
  public updUsuario: UpdateUsuarioI = { nombre: '', apellido: '', password: '', role: 2 };
  private error: ErrorI;
  private usuario: any;
  private rolesData: any = [];
  public readRoles: RolI[] = [];

  private emailPattern: any = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  createFormGroup() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(2)]),
      username: new FormControl(''),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      correo: new FormControl(''),
      role: new FormControl(2, [Validators.required])
    });
  }

  constructor(
    private readonly usuarioSerice: UsuarioService, private readonly route: Router, private readonly toastr: ToastrService,
    private readonly avRoute: ActivatedRoute
  ) {
    this.usuarioForm = this.createFormGroup();
  }

  get nombre() { return this.usuarioForm.get('nombre'); }
  get apellido() { return this.usuarioForm.get('apellido'); }
  get username() { return this.usuarioForm.get('username'); }
  get password() { return this.usuarioForm.get('password'); }
  get correo() { return this.usuarioForm.get('correo'); }
  get role() { return this.usuarioForm.get('role'); }

  ngOnInit(): void {
    this.onResetForm();
    this.getRoles();
    this.id = this.avRoute.snapshot.params.id;
    this.usuarioForm.clearValidators();
    this.getUsuario();
    this.usuarioForm.updateValueAndValidity();
  }

  getUsuario() {
    this.usuarioSerice.getOneUsuario(this.id).subscribe(
      (data) => {
        this.usuario = data;
        this.updUsuario = this.usuario;
        this.idRole = this.updUsuario.role;
        this.rolId = this.idRole.id;
      },
      (error) => {
        this.error = error.error;
        this.toastr.error(`${this.error.message}`, 'Error');
      }
    );
  }

  getRoles() {
    this.usuarioSerice.getAllRol().subscribe(
      (data) => {
        this.rolesData = data;
        this.readRoles = this.rolesData;
      },
      (error) => {
        this.error = error.error;
        this.toastr.error(`${this.error.message}`, 'Error');
      }
    );
  }

  onResetForm() {
    this.usuarioForm.reset();
  }

  onSaveForm() {
    if (this.usuarioForm.valid) {
      this.updUsuario = this.usuarioForm.value;
      this.usuarioSerice.updateUsuario(this.id, this.updUsuario).subscribe(
        () => {
          this.onResetForm();
          this.toastr.success('Usuario Actualizado Exitosamente', 'Success');
          this.route.navigate(['/usuario']);
        },
        (error) => {
          this.error = error.error;
          console.log(error);
          this.toastr.error(`${this.error.message}`, 'Error');
        }
      );
    }
  }

}
