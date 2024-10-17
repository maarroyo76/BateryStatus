import { Injectable } from '@angular/core';
import { Device } from  '@capacitor/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor() { }

  getBatteryInfo() {
    return Device.getBatteryInfo();
  }
}
