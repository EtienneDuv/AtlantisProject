import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class ApiMobileService {

  constructor(
    private http: HTTP,
    ) { }

  getUsers() {
    this.http.get(`http://localhost:8080/API/webresources/getUsers`, {}, {})
      .then((data: any) => {
        console.log(data)
      })
  }

  getUserDevices(idUser: string | number) {
    this.http.get(`http://localhost:8080/API/webresources/getUserDevices/${idUser}`, {}, {})
      .then((data: any) => {
        console.log(data)
      })
  }

  getSelectedDeviceInfo(idDevice: string | number) {
    this.http.get(`http://localhost:8080/API/webresources/getselecteddevice/${idDevice}`, {}, {})
      .then((data: any) => {
        console.log(data)
      })
  }

  getLastMetric(idDevice: string | number) {
    return `metric ${idDevice}`.toString()
    this.http.get(`http://localhost:8080/API/webresources/getLastMetric/${idDevice}`, {}, {})
      .then((data: any) => {
        console.log(data)
      })
  }

  getLastCalculatedMetric(idDevice: string | number) {
    return `Calculated metric ${idDevice}`.toString()
    this.http.get(`http://localhost:8080/API/webresources/getLastCalculatedMetric/${idDevice}`, {}, {})
      .then((data: any) => {
        console.log(data)
      })
  }

  sendCommand(command: string | number) {
    this.http.get(`http://localhost:8080/API/webresources/getLastCalculatedMetric/${command}`, {}, {})
      .then((data: any) => {
        console.log(data)
      })
  }

  getDevice
}
