import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { environment } from 'src/environments/environment';

/*Firebase*/
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';



@NgModule({
  declarations: [AppComponent],
  imports: [AngularFireModule.initializeApp(environment.firebaseConfig), AngularFireDatabaseModule, BrowserModule, AppRoutingModule, LoginModule, DashboardModule, UsuarioModule],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
