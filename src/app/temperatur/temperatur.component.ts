import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Chartist from 'chartist';
import { WebsocketService } from '../services/websocket.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-temperatur',
  templateUrl: './temperatur.component.html',
  styleUrls: ['./temperatur.component.scss']
})
export class TemperaturComponent implements OnInit, OnDestroy {
  private messagesSubscription: Subscription;
  private chart: any;
  private maxDataPoints = 7;
  private labels = ['1h', '50min', '40min', '30min', '20min', '10min', '5min'];
  private series: number[] = []; // Leere Serie initialisieren
  private previousValue: number | null = null; // Vorheriger Wert (initial null)
  private currentValue: number | null = null; // Aktueller Wert (initial null)
  public temperatureChangePercentage: number | null = null; // Prozentuale Veränderung

  constructor(private websocketService: WebsocketService) {}

  ngOnInit() {
    // Chart initialisieren ohne einen initialen Wert bei 0
    this.chart = new Chartist.Line('#temperatur', {
      labels: this.labels,
      series: [this.series]
    }, {
      low: 0,
      high: 50,
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
    });

    // WebSocket abonnieren
    this.messagesSubscription = this.websocketService.messages$.subscribe(message => {
      if (message) {
        message = JSON.parse(message);
        console.log('Neue Temperatur:', message.temperature);

        // Berechne die Differenz und die prozentuale Veränderung
        if (this.previousValue !== null) {
          const difference = message.temperature - this.previousValue;
          this.temperatureChangePercentage = ((difference / this.previousValue) * 100);
        }

        this.updateChartData(message.temperature);

        // Update previous and current values
        this.previousValue = this.currentValue;
        this.currentValue = message.temperature;
      }
    });
  }

  private updateChartData(newValue: number) {
    // Älteste Werte entfernen, wenn das Maximum erreicht ist
    if (this.series.length >= this.maxDataPoints) {
      this.series.shift();
    }

    // Neuen Temperaturwert hinzufügen
    this.series.push(newValue);

    // Chart aktualisieren
    this.chart.update({
      labels: this.labels.slice(-this.series.length),
      series: [this.series]
    });
  }

  ngOnDestroy() {
    if (this.messagesSubscription) {
      this.messagesSubscription.unsubscribe();
    }
  }
}
