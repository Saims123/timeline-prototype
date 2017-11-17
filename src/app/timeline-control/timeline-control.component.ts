import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timeline-control',
  templateUrl: './timeline-control.component.html',
  styleUrls: ['./timeline-control.component.css']
})
export class TimelineControlComponent implements OnInit {
@Output()fastForward = new EventEmitter<boolean>();
@Output()backward = new EventEmitter<boolean>();
@Output()onPlay = new EventEmitter<boolean>();
@Output()OnSpeed = new EventEmitter<boolean>();

  constructor() { }
  isPlay = false;
  status = 'Play';
  onSpeed = false;
  speedStatus = '2x';
  ngOnInit() {

  }

  play() {
    this.isPlay = !this.isPlay;
    if (this.isPlay) {
        this.status = 'Pause';
    } else if (!this.isPlay) {
        this.status = 'Play';
    }
    this.onPlay.emit(this.isPlay);
  }

  fast() {
    this.fastForward.emit(true);
  }

    back() {
    this.backward.emit(true);
  }

changeSpeed() {
      if (this.onSpeed) {
      this.onSpeed = false;
        this.speedStatus = '2x';
    } else if (!this.onSpeed) {
      this.onSpeed = true;
        this.speedStatus = '1x';
    }
    this.OnSpeed.emit(this.onSpeed);
}





}
