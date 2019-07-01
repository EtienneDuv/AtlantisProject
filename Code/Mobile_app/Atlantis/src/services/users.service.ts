import { Injectable } from '@angular/core';
import { DevicesService } from './devices.service'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public users: any = [];

  constructor( private devicesService: DevicesService) { }
  
  /**
   * Send array or create it
   */
  getUsers() {
    if (Array.isArray(this.users) && this.users.length) {
      return this.users;
    }
    else {
      this.initializeItems();
      return this.users
    }
  }

  getUserInfo(id: any){
    if ('devices' in this.users[id]){
      // console.log(this.users[id]);
      return this.users[id];
    }
    else {
      this.users[id] = ({
        index: this.users[id].index,
        name: this.users[id].name,
        surname: this.users[id].surname,
        devices: this.devicesService.generateDevice(5),
      });
      // console.log(this.users[id]);
      return this.users[id];
    }
  }

  /**
   * Generate data array
   */
  initializeItems() {
    for (let index = 0; index < 35; index++) {
      this.users.push({
        index: index,
        name: 'User#' + index,
        surname: "surname",
      });
    }
  }

}
