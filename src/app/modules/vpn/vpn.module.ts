import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VpnComponent } from './vpn.component';
import { VpnService } from './vpn.service';



@NgModule({
  declarations: [VpnComponent],
  imports: [CommonModule],
  providers: [VpnService]
})
export class VpnModule { }
