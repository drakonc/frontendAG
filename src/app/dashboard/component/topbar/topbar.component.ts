import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private readonly router: Router, private readonly cookieService: CookieService) { }

  ngOnInit(): void {
  }

  Salir() {
    localStorage.clear();
    this.cookieService.delete('LoginNombre');
    this.router.navigate(['login']);
  }

}
