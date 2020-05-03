import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FooterComponent } from './component/footer/footer.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { TopbarComponent } from './component/topbar/topbar.component';
import { HomeComponent } from './component/home/home.component';
import { UsuarioModule } from '../modules/usuario/usuario.module';
import { AuthModule } from '../modules/auth/auth.module';
import { AuthService } from '../modules/auth/auth.service';

@NgModule({
  declarations: [DashboardComponent, FooterComponent, SidebarComponent, TopbarComponent, HomeComponent],
  exports: [DashboardComponent],
  imports: [AppRoutingModule, CommonModule, UsuarioModule, AuthModule],
  providers: [AuthService]
})
export class DashboardModule { }
