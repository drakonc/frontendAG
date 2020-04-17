import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = { username: '', password: '' };

  constructor(private readonly router: Router, private readonly cookieService: CookieService) {
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
      this.cookieService.set('LoginNombre', this.model.username, 1);
      this.router.navigate(['/']);
    } else {
      console.log('Contraseña y usuario errado');
    }
  }

}
