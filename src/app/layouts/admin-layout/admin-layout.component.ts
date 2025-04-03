import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {MatSelectChange} from "@angular/material/select";
import {WebsocketService} from "../../services/websocket.service";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  protected selectedDevice = 'device1';

    constructor(private websocketService: WebsocketService) {}

  ngOnInit() {
    this.websocketService.currentArduino$.subscribe({

    })
  }

    onDeviceChange(event: MatSelectChange) {
        console.log('Neues Gerät gewählt:', event.value);
        this.websocketService.updateArduino(event.value);
    }

}
