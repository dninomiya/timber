import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import NgxTwitterTimelineOptions from 'ngx-twitter-timeline/lib/ngx-twitter-timeline-options.interface';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit, AfterViewInit {

  @ViewChild('timeline', { static: true }) box: ElementRef;

  scrollTop = 0;
  isStart: boolean;
  isHover: boolean;

  opts: NgxTwitterTimelineOptions = {
    theme: 'dark',
    chrome: [
      'noheader',
      'nofooter',
      'transparent'
    ]
  };

  contentHeight: number;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.contentHeight = this.box.nativeElement.offsetHeight;
      if (!this.isStart) {
        this.isStart = true;
        setInterval(() => {
          if (!this.isHover) {
            if (this.scrollTop < this.contentHeight - 446) {
              ++this.scrollTop;
            } else {
              this.scrollTop = 0;
            }
          }
        }, 60);
      }
    }, 3000);
  }

  enable() {
    this.isHover = false;
  }

  disabled() {
    this.isHover = true;
  }

  onScroll($event) {
    if (this.isHover) {
      this.scrollTop = $event.srcElement.scrollTop;
    }
  }

}
