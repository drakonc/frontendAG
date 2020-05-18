import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Loggerin } from '../shared/models/loggerin/logger-in';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private loggerin: Loggerin;

  constructor(
    private router: Router, private readonly cookieService: CookieService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    this.loggerin = JSON.parse(localStorage.getItem('usuario'));
    if (localStorage.length > 0 && this.cookieService.check('Secret') === true && this.cookieService.check('UserNobre') === true && this.cookieService.check('UserApellido') === true && this.cookieService.check('RoleName') === true) {
      if (route.data.roles && route.data.roles.indexOf(this.loggerin.user.role.id) === -1) {
        // role not authorised so redirect to home page
        this.router.navigate(['noAuth']);
        return false;
      }
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
