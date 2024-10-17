import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  batteryInfo: any;
  chargeLevel: number | undefined;
  message!: string;

  constructor(
    private deviceService: DeviceService
  ) { }
  
  ngOnInit() {
    this.getBatteryInfo();
    this.isDeviceCharging();
    this.convertToPercentage();
  }


  async getBatteryInfo() {
    const info = await this.deviceService.getBatteryInfo();
    this.batteryInfo = info;
    this.isDeviceCharging();
    this.convertToPercentage();
    console.log(info);
  }

  isDeviceCharging() {
    if (this.batteryInfo.isCharging === true) {
      this.message = "El dispositivo está cargando";
    } else {
      this.message = "El dispositivo no está cargando";
    }
  }

  convertToPercentage() {
    this.chargeLevel = this.batteryInfo.batteryLevel * 100;
  }
}
