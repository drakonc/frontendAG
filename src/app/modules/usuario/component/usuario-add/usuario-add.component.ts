import { Component, OnInit } from '@angular/core';
import { Function } from '../../../../shared/function/function';
import { genSalt, hash } from 'bcrypt';

@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {

  constructor() { }

  public date: string;
  public fn = new Function();

  ngOnInit(): void {
    console.log('Fecha ' + this.fn.getDate());
  }
}
