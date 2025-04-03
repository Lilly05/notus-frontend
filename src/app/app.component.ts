import {Component, OnDestroy} from '@angular/core';
import {WebsocketService} from "./services/websocket.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  messages: any[] = [];
  private messagesSubscription: Subscription;

  constructor(private websocketService: WebsocketService) {}

  ngOnInit() {
    this.messagesSubscription = this.websocketService.messages$.subscribe(
        message => {
          if (message) {
            console.log(message);
            this.messages.push(message);
          }
        }
    );
  }

  ngOnDestroy() {
    this.messagesSubscription.unsubscribe();
  }

  sendMessage() {
    this.websocketService.sendMessage({ action: 'ping' });
  }
}
