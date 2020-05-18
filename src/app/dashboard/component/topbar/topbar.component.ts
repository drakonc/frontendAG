import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  public nombre: string;

  constructor(private readonly router: Router, private readonly cookieService: CookieService) { }

  ngOnInit(): void {
    this.nombre = `${this.cookieService.get('UserNobre')} ${this.cookieService.get('UserApellido')}`;
  }

  Salir() {
    this.cookieService.deleteAll();
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
