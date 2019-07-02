import { Component, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Storage } from '@ionic/storage';
import { AuthenticationService } from '../../services/authentication.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private checkStatus: boolean = true;
  constructor(
    public router: Router, 
    public authService: AuthenticationService,
    public storage: Storage,
    public splashScreen: SplashScreen,
    public ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    ) {}

  signIn() {
    if (this.authService.authenticationState.getValue()) {
      console.log("TRUE")
      this.router.navigate(['/hub'], { relativeTo: this.activatedRoute });
    }
    else if (!this.authService.authenticationState.getValue()){
      console.log("FALSE")
      this.authService.signIn();
    }
  }

  signUp() {
    this.signIn();
  }

  revealSignIn() {
    this.checkStatus = true;
  }

  revealSignUp() {
    this.checkStatus = false;
  }

}
