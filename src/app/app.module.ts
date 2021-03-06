import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NoAuthComponent } from './page/no-auth/no-auth.component';
import { NoFountComponent } from './page/no-fount/no-fount.component';



@NgModule({
  declarations: [AppComponent, NoAuthComponent, NoFountComponent],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, LoginModule, DashboardModule, ReactiveFormsModule,
    BrowserAnimationsModule, ToastrModule.forRoot()
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
