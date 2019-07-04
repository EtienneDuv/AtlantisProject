import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-select-devices',
  templateUrl: './select-devices.page.html',
  styleUrls: ['./select-devices.page.scss'],
})
export class SelectDevicesPage implements OnInit {

  private slug: string;
  public userInfo;
  public name: string;
  public type: string;
  constructor(
    public activatedRoute: ActivatedRoute,
    public usersService: UsersService,
    ) { }

  ngOnInit() {
    this.slug = this.activatedRoute.snapshot.paramMap.get('userId')
    this.userInfo = this.usersService.getUserInfo(this.slug);
  }

  submit() {
    let request = {
      'name': this.name,
      'type': this.type,
      'userId': this.userInfo.index,
    }
    console.log(request)
  }

}
