import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './login.service';
import { Loggerin } from '../shared/models/loggerin/logger-in';
import { LoginI } from './model/login.interface';
import { ErrorI } from '../shared/models/error/error.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public model = { username: '', password: '' };
  private logModel: LoginI;
  private token: any;
  private loggerin: Loggerin;
  private error: ErrorI;

  constructor(
    private readonly router: Router, private readonly cookieService: CookieService, private readonly loginService: LoginService,
    private readonly toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    if (localStorage.length > 0 && this.cookieService.check('Secret') === true && this.cookieService.check('UserNobre') === true && this.cookieService.check('UserApellido') === true && this.cookieService.check('RoleName') === true) {
      this.router.navigate(['/']);
    }
  }

  submit() {
    this.logModel = {
      username: this.model.username,
      password: this.model.password
    };

    this.loginService.login(this.logModel).subscribe(
      (data) => {
        this.token = data;
        this.loggerin = this.token;
        localStorage.setItem('usuario', JSON.stringify(this.loggerin));
        this.cookieService.set('Secret', this.loggerin.token, 1);
        this.cookieService.set('UserNobre', this.loggerin.user.nombre, 1);
        this.cookieService.set('UserApellido', this.loggerin.user.apellido, 1);
        this.cookieService.set('RoleName', this.loggerin.user.role.name, 1);
        this.router.navigate(['/']);

      },
      (error) => {
        this.error = error.error;
        this.toastr.error(`${this.error.message}`, 'Error');
      }
    );
  }

}
