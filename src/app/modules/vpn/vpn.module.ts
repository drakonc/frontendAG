import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from '../../app-routing.module';
import { VpnComponent } from './vpn.component';
import { VpnService } from './vpn.service';
import { VpnAddComponent } from './component/vpn-add/vpn-add.component';
import { VpnDelComponent } from './component/vpn-del/vpn-del.component';
import { VpnEditComponent } from './component/vpn-edit/vpn-edit.component';



@NgModule({
  declarations: [VpnComponent, VpnAddComponent, VpnDelComponent, VpnEditComponent],
  imports: [
    CommonModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, FormsModule
  ],
  providers: [VpnService, CookieService]
})
export class VpnModule { }
