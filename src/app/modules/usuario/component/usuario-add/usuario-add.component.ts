import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateUsuarioI } from '../../models';
import { UsuarioService } from '../../usuario.service';
import { RolI } from '../../../../shared/models/rol/rol.interface';
import { ErrorI } from '../../../../shared/models/error/error.interface';

@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {

  public usuarioForm: FormGroup;
  public newUsuario: CreateUsuarioI = { nombre: '', apellido: '', username: '', correo: '', password: '', role: 2 };
  private error: ErrorI;
  private rolesData: any = [];
  public readRoles: RolI[] = [];

  private emailPattern: any = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  createFormGroup() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(2)]),
      username: new FormControl('', [Validators.required, Validators.minLength(2)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      correo: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      role: new FormControl(2, [Validators.required])
    });
  }
  constructor(
    private readonly usuarioSerice: UsuarioService, private readonly route: Router, private readonly toastr: ToastrService
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
      this.newUsuario = this.usuarioForm.value;
      this.usuarioSerice.createUsuario(this.newUsuario).subscribe(
        () => {
          this.onResetForm();
          this.toastr.success('Usuario Creado Exitosamente', 'Success');
          this.route.navigate(['/usuario']);
        },
        (error) => {
          this.error = error.error;
          this.toastr.error(`${this.error.message}`, 'Error');
        }
      );
    }
  }

}
