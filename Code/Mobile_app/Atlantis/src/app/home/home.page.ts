import { Component, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Storage } from '@ionic/storage';
import { AuthenticationService } from '../../services/authentication.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { HTTP } from '@ionic-native/http/ngx'

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
    private http: HTTP,
    ) {}

  signIn() {

    this.http.get('http://localhost:8080/API/webresources/GetUserDevices/1', {}, {})
    .then(data => {
      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
    })
/*
    if (this.authService.authenticationState.getValue()) {
      console.log("TRUE")
      this.router.navigate(['/hub'], { relativeTo: this.activatedRoute });
    }
    else if (!this.authService.authenticationState.getValue()){
      console.log("FALSE")
      this.authService.signIn();
    }*/
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
