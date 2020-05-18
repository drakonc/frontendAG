import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FooterComponent } from './component/footer/footer.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { TopbarComponent } from './component/topbar/topbar.component';
import { HomeComponent } from './component/home/home.component';
import { UsuarioModule } from '../modules/usuario/usuario.module';

@NgModule({
  declarations: [DashboardComponent, FooterComponent, SidebarComponent, TopbarComponent, HomeComponent],
  exports: [DashboardComponent],
  imports: [AppRoutingModule, CommonModule, UsuarioModule],
  providers: [CookieService]
})
export class DashboardModule { }
