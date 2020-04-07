import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = { username: '', password: '' };

  constructor(private router: Router) {
    if (localStorage.getItem('secion')) { this.router.navigate(['']); }
  }

  ngOnInit(): void {
    if (localStorage.getItem('secion')) {
      this.router.navigate(['']);
    }
  }

  submit() {
    if (this.model.username === 'jcastro' && this.model.password === 'Passw0rd!!') {
      localStorage.setItem('secion', 'Activo');
      this.router.navigate(['/']);
    } else {
      console.log('Contraseña y usuario errado');
    }
  }

}
