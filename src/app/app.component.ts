import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(private readonly router: Router, private readonly cookieService: CookieService) { }

  ngOnInit() {
    if (localStorage.length == 0 && this.cookieService.check('LoginNombre') == false) {
      this.router.navigate(['/login']);
    }
  }

}
