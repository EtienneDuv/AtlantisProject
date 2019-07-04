import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.page.html',
  styleUrls: ['./hub.page.scss'],
})
export class HubPage implements OnInit {

  constructor(private router: Router) { }


  private isAdmin: boolean = false;

  ngOnInit() {
  }

  toggleAdmin() {
    this.isAdmin = !this.isAdmin
  }
}
