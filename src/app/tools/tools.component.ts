import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { SpeechService } from 'ngx-speech';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit, OnDestroy {

  @Output() msg: EventEmitter<string> = new EventEmitter();

  isMicActive: boolean;
  subscriptions = new Subscription();

  constructor(public speech: SpeechService) { }

  ngOnInit() {
    this.initSpeech();
  }

  initSpeech() {
    this.subscriptions.unsubscribe();
    this.subscriptions = new Subscription();
    this.speech.start();
    this.subscriptions.add(
      this.speech.started.subscribe(status => {
        this.isMicActive = status;
      })
    );
    this.subscriptions.add(
      this.speech.message.subscribe(msg => {
        console.log(msg);
        this.msg.emit(msg.message);
      })
    );
  }

  start() {
    this.initSpeech();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
