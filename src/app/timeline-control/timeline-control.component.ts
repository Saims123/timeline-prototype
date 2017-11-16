import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timeline-control',
  templateUrl: './timeline-control.component.html',
  styleUrls: ['./timeline-control.component.css']
})
export class TimelineControlComponent implements OnInit {
@Output()fastForward = new EventEmitter<number>();
@Output()backward = new EventEmitter<number>();

  constructor() { }
  isPlay = false;
  status = 'Play';
  ngOnInit() {

  }

  play() {
    if (this.isPlay) {
      this.isPlay = false;
        this.status = 'Play';
    } else if (!this.isPlay) {
      this.isPlay = true;
        this.status = 'Pause';
    }
  }

  fast() {
    this.fastForward.emit(1);
  }

    back() {
    this.fastForward.emit(-1);
  }






}
