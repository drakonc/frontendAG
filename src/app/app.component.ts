import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(private readonly router: Router, private readonly cookieService: CookieService) { }

  ngOnInit() {
    if (!localStorage.getItem('secion') || this.cookieService.getAll() == null) {
      this.router.navigate(['login']);
    }
  }

}
