import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timeline-control',
  templateUrl: './timeline-control.component.html',
  styleUrls: ['./timeline-control.component.css']
})
export class TimelineControlComponent implements OnInit {
  @Output() fastForward = new EventEmitter<boolean>();
  @Output() backward = new EventEmitter<boolean>();
  @Output() onPlay = new EventEmitter<boolean>();
  @Output() OnSpeed = new EventEmitter<boolean>();
  @Output() Pulse = new EventEmitter<boolean>();

  constructor() { }
  isPlay = false;
  status = 'Play';
  onSpeed = false;
  speedStatus = '2x';
  Timer = 0;
  timeInterval = 1000;
  speedModifier = 3;
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
    this.loopTest();
  }

  fast() {
    this.fastForward.emit(true);
    this.isPlay = false;
    this.onPlay.emit(this.isPlay);
  }

  back() {
    this.backward.emit(true);
    this.isPlay = false;
    this.onPlay.emit(this.isPlay);
  }

  changeSpeed() {
    if (this.onSpeed) {
      this.onSpeed = false;
      this.speedStatus = '2x';
      this.timeInterval *= this.speedModifier;

    } else if (!this.onSpeed) {
      this.onSpeed = true;
      this.speedStatus = '1x';      
      this.timeInterval /= this.speedModifier;
    }
    this.OnSpeed.emit(this.onSpeed);
    if(this.isPlay) {
    this.loopTest();
    }

  }

  loopTest() {
    clearInterval(this.Timer);
    console.log(this.isPlay);
    if (this.isPlay) {
      
      let start = new Date().getTime(), elapsed = 0.0;

      this.Timer = window.setInterval(() => {
        this.Pulse.emit(this.isPlay);
        let time = new Date().getTime() - start;
        elapsed = Math.floor(time / 1000) / 10;
        if (Math.round(elapsed) === elapsed) { elapsed += .0; }
        console.log(time);

      }, this.timeInterval);
    } else {
      clearInterval(this.Timer);
    }
          
          

  }





}
