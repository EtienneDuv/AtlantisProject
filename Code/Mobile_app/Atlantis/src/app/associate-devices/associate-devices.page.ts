import { Component } from '@angular/core';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-associate-devices',
  templateUrl: './associate-devices.page.html',
  styleUrls: ['./associate-devices.page.scss'],
})
export class AssociateDevicesPage {

  public users: Array<{ index: number; name: string; }> = [];
  public base_users = [];

  constructor(usersService: UsersService) {
    this.users = usersService.getUsers()
    this.base_users = this.users
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.users = this.base_users;

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.users = this.users.filter((user) => {
        return (user.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
