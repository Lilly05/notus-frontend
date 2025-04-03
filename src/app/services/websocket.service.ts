import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket: WebSocket;
  private messagesSubject = new BehaviorSubject<any>(null); // Startet mit `null`
  messages$ = this.messagesSubject.asObservable(); // Exponiert als Observable für den Component

  private currentArduinoSubject = new BehaviorSubject<string>("device1");
  currentArduino$ = this.currentArduinoSubject.asObservable();

  constructor() {
    this.connectWebSocket();
  }

  private connectWebSocket() {
    this.socket = new WebSocket('ws://172.18.12.54:8080/ws');

    this.socket.onopen = () => console.log('WebSocket verbunden');

    this.socket.onmessage = (event) => {
      this.messagesSubject.next(event.data); // Neue Nachricht an alle Subscriber senden
    };

    this.socket.onerror = (error) => console.error('WebSocket-Fehler:', error);

    this.socket.onclose = () => console.log('WebSocket geschlossen');
  }

  sendMessage(message: any): void {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(message));
    } else {
      console.warn('WebSocket nicht verbunden');
    }
  }

  closeConnection(): void {
    this.socket.close();
  }

  updateArduino(arduino: string) {
    this.currentArduinoSubject.next(arduino);
  }
}
