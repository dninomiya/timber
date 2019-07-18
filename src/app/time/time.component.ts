import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  date = new Date();

  constructor() {
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }

  ngOnInit() {}
}
