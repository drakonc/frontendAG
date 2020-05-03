import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { AuthModule } from '../modules/auth/auth.module';
import { AuthService } from '../modules/auth/auth.service';


@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, FormsModule, AuthModule],
  providers: [CookieService, AuthService],
})
export class LoginModule { }
