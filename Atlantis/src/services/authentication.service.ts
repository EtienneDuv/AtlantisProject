import { Injectable } from '@angular/core'
import { Storage } from '@ionic/storage'
import { BehaviorSubject } from 'rxjs'

import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx'
import { Platform } from '@ionic/angular'
import { HTTP } from '@ionic-native/http/ngx'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    public storage: Storage,
    public platform: Platform,
    public inAppBrowser: InAppBrowser,
    public http: HTTP,
  ) {
    this.platform.ready().then(() => {
      this.checkToken()
    })
  }

  public authenticationState = new BehaviorSubject(false)
  private urls = {
    signIn: 'https://atlantisproject.b2clogin.com/atlantisproject.onmicrosoft.com/oauth2/v2.0/authorize?p=b2c_1_signuporsignin&client_id=27fb84fe-4baf-4b6b-bfe7-f2d0638f2790&response_type=code&redirect_uri=http://localhost:8090&scope=openid',
    signUp: '',
    signOut: '',
  }
  public url2
  options: InAppBrowserOptions = {
    location: 'yes',//Or 'no' 
    hidden: 'no', //Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',//Android only ,shows browser zoom controls 
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no', //Android only 
    closebuttoncaption: 'Close', //iOS only
    disallowoverscroll: 'no', //iOS only 
    toolbar: 'yes', //iOS only 
    enableViewportScale: 'no', //iOS only 
    allowInlineMediaPlayback: 'no',//iOS only 
    presentationstyle: 'pagesheet',//iOS only 
    fullscreen: 'yes',//Windows only    
  }

  signIn() {        this.authDone()

/*     console.log("==============================START login")
    const browser = this.inAppBrowser.create(this.urls.signIn, '_blank', this.options)
    browser.on('loadstart').subscribe(async (e: any) => {
      this.url2 = e.url
      // console.log("url=" + e.url)
      if ((e.url).indexOf('?code=') !== -1) {
        let authCode = e.url.slice(e.url.indexOf('?code=') + '?code='.length)
        this.storage.set("AUTH_CODE", authCode)
        // here is your token, now you can close the InAppBrowser
        browser.close()
        // this.getToken(authCode)
        this.authDone()
      }
    })
 */  }

  async getToken(authCode){
    let jwt
    console.log(authCode)
//     this.http.post("https://www.mydomain.com/api/getSomething", {"what": this.url2} , {‘Content-Type’: ‘application/x-www-form-urlencoded’} ).then(data => {
// if (data.status == 200) { }
//   });

    await this.http.post('https://atlantisproject.b2clogin.com/atlantisproject.onmicrosoft.com/oauth2/v2.0/token?p=b2c_1_signuporsignin',
      {
        'grant_type': 'authorization_code',
        'code': authCode,
        'client_secret': 'Zg2^04#WjA#h%6Q{]eK53J&`',
        'client_id': '27fb84fe-4baf-4b6b-bfe7-f2d0638f2790'
      },
      { 'Content-type': '‘application/x-www-form-urlencoded’'}
    ).then(result => {
      jwt = JSON.parse(result.data).id_token
      console.log(jwt)
      this.storage.set("JWT_TOKEN", jwt)
      console.log(localStorage.getItem('id_token'))
    }).catch((e) => { console.log("FAILED1"); console.log(e.error) })
  }

  authDone() {
    console.log("==============================STOP login")
    this.authenticationState.next(true)
  }

  signUp() {
    this.signIn()
  }

  signOut() {
    return this.storage.remove("AUTH_CODE").then(() => {
      this.authenticationState.next(false)
    })
  }

  checkToken() {
    this.storage.get("JWT_TOKEN").then(res => {
      if (res) {
        this.authenticationState.next(true)
      }
    })
  }

  isAuthenticated() {
    return this.authenticationState.value
  }

}