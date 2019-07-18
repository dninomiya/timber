import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss']
})
export class CommandComponent implements OnInit {

  @Output() command: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  submit(value: string) {
    if (value) {
      this.command.emit(value);
    }
  }

  focus(elm) {
    elm.focus();
  }
}
