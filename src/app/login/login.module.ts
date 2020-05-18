import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, FormsModule],
  providers: [CookieService],
})
export class LoginModule { }
