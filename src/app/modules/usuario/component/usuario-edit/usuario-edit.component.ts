import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../usuario.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioI } from '../../../../shared/models/usuario.interface';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  public usuario$: Observable<UsuarioI>;


  constructor(private readonly usuarioService: UsuarioService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getOneUsuario();
  }
  getOneUsuario() {
    const id = this.route.snapshot.params.id;
    this.usuario$ = this.usuarioService.getOneUser(id);
  }

}
