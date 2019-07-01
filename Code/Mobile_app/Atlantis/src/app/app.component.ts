import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Component, NgZone } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
    private router: Router,
    private ngZone: NgZone,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authenticationService.authenticationState.subscribe(state => 
        {
        if (state) {
          console.log("STATE SUBSCRIBED === User is logged in");
          this.ngZone.run(() => this.router.navigate(['hub'])).then();
          this.splashScreen.hide();
        } else {
          console.log("STATE SUBSCRIBED === User is NOT logged in");
          this.ngZone.run(() => this.router.navigate(['home'])).then();
          this.splashScreen.hide();
        }
      });

    });
  }
}
