import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DevicesService } from '../../services/devices.service';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.page.html',
  styleUrls: ['./device-details.page.scss'],
})
export class DeviceDetailsPage implements OnInit {

  public possibleMethods = {
    'avg': 'Average',
    'max': 'Maximum',
    'min': 'Minimum',
    'crit': 'Critical',
  }

  private slug: string;
  public deviceInfo: any;
  public lastMeasuredMetric: any = "Last metric";

  public range: any = {min: 0, max: 48};
  public time: any = { lower: 0, upper: 12 };
  public timeMin: any;
  public timeMax: any;
  public request: any = {};
  public method: string = this.possibleMethods['avg'];

  constructor(private activatedRoute: ActivatedRoute, private devices: DevicesService, private router: Router, private ngZone: NgZone) { 
    this.timeMin = this.time.lower
    this.timeMax = this.time.upper
    this.changeRequest('button', 'avg');
    this.changeRequest('range', null);
  }

  ngOnInit(): void {
    this.slug = this.activatedRoute.snapshot.paramMap.get('deviceId')
    this.deviceInfo = this.devices.getSelectedDevice(this.slug)[0];
  }

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
    this.ngZone.run(() => this.router.navigate(['hub'])).then();
    this.router.navigate(['/display-graph'])
  }

}
