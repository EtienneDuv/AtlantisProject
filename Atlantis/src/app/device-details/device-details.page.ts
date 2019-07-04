import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DevicesService } from '../../services/devices.service';
import { ApiMobileService } from '../../services/api-mobile.service'

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.page.html',
  styleUrls: ['./device-details.page.scss'],
})
export class DeviceDetailsPage {

  constructor(
    private activatedRoute: ActivatedRoute,
    private devices: DevicesService,
    public api: ApiMobileService,
    public router: Router,
    ) {
    this.timeMin = this.time.lower
    this.timeMax = this.time.upper
    this.changeRequest('button', 'avg');
    this.changeRequest('range', null);
  }

  public possibleMethods = {
    'avg': 'Average',
    'max': 'Maximum',
    'min': 'Minimum',
    'crit': 'Critical',
  }


  public slug = parseInt(this.activatedRoute.snapshot.paramMap.get('deviceId'))
  public deviceInfo = this.devices.getSelectedDevice(this.slug)[0];

  public range: any = {min: 0, max: 48};
  public time: any = { lower: 0, upper: 12 };
  public timeMin: any;
  public timeMax: any;
  public request: any = {};
  public method: string = this.possibleMethods['avg'];
  public lastMetric: string = this.api.getLastMetric(this.slug);
  public lastCalculatedMetric: string = this.api.getLastCalculatedMetric(this.slug);

  /**
   * Change the request body
   * @param from 
   * @param value 
   */
  changeRequest(from: string, value: any){
    if (from === 'button') {
      this.method = this.possibleMethods[value]
      this.request.method = this.method
    }
    if (from === 'range') {
      this.timeMin = this.time.lower
      this.timeMax = this.time.upper

      this.request.timeMin = this.timeMin
      this.request.timeMax = this.timeMax
    }
  }

  submit(){
    console.log(this.request);
    this.router.navigate(['/display-graph'])
    // console.log(this.lastMetric, this.lastCalculatedMetric)
  }

}
