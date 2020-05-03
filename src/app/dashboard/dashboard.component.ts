import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private readonly router: Router, private readonly cookieService: CookieService) { }

  ngOnInit(): void {
    if (localStorage.length == 0 && this.cookieService.check('LoginNombre') == false) {
      this.router.navigate(['/login']);
    }
  }

}
