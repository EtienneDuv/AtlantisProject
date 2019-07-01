import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-user-devices',
  templateUrl: './list-user-devices.page.html',
  styleUrls: ['./list-user-devices.page.scss'],
})
export class ListUserDevicesPage implements OnInit {

  private slug: string;
  public userInfo: any;

  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.slug = this.activatedRoute.snapshot.paramMap.get('userId')
    this.userInfo = this.usersService.getUserInfo(this.slug);
    console.log(this.userInfo);
  }

}
