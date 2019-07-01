import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  private metrics = [
    { name: "Temperature", unit: "°C" },
    { name: "CO2", unit: "%" },
    { name: "Hymidity", unit: "%" },
    { name: "Pressure", unit: "Pa" },
    { name: "Light", unit: "Lux" },
    { name: "Sound", unit: "Db" },
    { name: "GPS", unit: "coord" },
    { name: "LED", unit: "" },
    { name: "Beeper", unit: "" },
  ];
  public items = [];
  constructor() { }

  /**
   * Send array or create it
   */
  getDevices() {
    if (Array.isArray(this.items) && this.items.length) {
      return this.items;
    }
    else {
      this.initializeItems();
      return this.items
    }
  }

  /**
   * Generate data array
   */
  initializeItems() {
    this.items = this.generateDevice(15);
  }

  generateDevice(number: number){
    var array = []
    for (let index = 0; index < number; index++) {
      array.push({
        index: index,
        name: 'Device' + index,
        metric: this.randomValue(this.metrics),
      });
    }
    return array;
  }

  randomValue(array: any[] | string[]) {
    return array[Math.floor(Math.random() * array.length)]
  }

  private selectedDevice: any;
  /**
   * Send Device information for selected ID
   */
  getSelectedDevice(id: string | number) {
    this.selectedDevice = this.getDevices().filter(function (element) {
      return element.index.toString() === id.toString();
    });
    return this.selectedDevice
  }
}
