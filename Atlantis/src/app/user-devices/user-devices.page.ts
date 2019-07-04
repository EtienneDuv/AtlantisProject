import { Component } from '@angular/core';
import { DevicesService } from '../../services/devices.service' ;

@Component({
  selector: 'app-user-devices',
  templateUrl: './user-devices.page.html',
  styleUrls: ['./user-devices.page.scss'],
})
export class UserDevicesPage{
  
  public devices: any = [];

  constructor(devices: DevicesService) {
    this.devices = devices.getDevices()
  }

}
