import { Component, OnInit, Output, EventEmitter, OnChanges, OnDestroy } from '@angular/core';
import { TimeControllerService } from '../time-controller/time-controller.service';

@Component({
  selector: 'app-timeline-control',
  templateUrl: './timeline-control.component.html',
  styleUrls: ['./timeline-control.component.css']
})
export class TimelineControlComponent implements OnInit, OnChanges, OnDestroy {
  @Output() fastForward = new EventEmitter<boolean>();
  @Output() backward = new EventEmitter<boolean>();
  @Output() onPlay = new EventEmitter<boolean>();
  @Output() OnSpeed = new EventEmitter<boolean>();
  @Output() Pulse = new EventEmitter<boolean>();

  constructor(private timeControl: TimeControllerService) { }
  timeControlSubscription: any;
  timeControl2Subscription: any;
  status = 'Play';
  speedStatus = '2x';

  isPlay: boolean;
  onSpeed: boolean;

  Timer = 0;
  timeInterval = 1000;
  speedModifier = 2;
  ngOnInit() {
    this.timelineControlSub();
    this.timelineControlForthBackSub();
    this.loopTest();
  }
  ngOnChanges() {
    this.timelineControlSub();
    this.timelineControlForthBackSub();

  }

  ngOnDestroy() {
    this.timeControlSubscription.unsubscribe();
  }


  timelineControlSub() {
    this.timeControlSubscription = this.timeControl.playPauseSpeedControl$.subscribe((data) => {
      this.isPlay = data.play;
      this.onSpeed = data.speed;
      console.log('TimeController : ', data);
    });
  }

  timelineControlForthBackSub() {
    this.timeControlSubscription = this.timeControl.forwardBackwardControl$.subscribe((data) => {
      console.log('TimeControllerSpeed : ', data);
    });
  }




  play() {
    this.isPlay = !this.isPlay;
    if (this.isPlay) {
      this.timeControl.startPlayer();
    } else {
      this.timeControl.pausePlayer();
    }
    this.playPauseStatus();
    this.onPlay.emit(this.isPlay);
    this.loopTest();
  }

  playPauseStatus() {
    if (this.isPlay) {
      this.status = 'Pause';
      this.timeControl.startPlayer();
    } else if (!this.isPlay) {
      this.status = 'Play';
      this.timeControl.pausePlayer();
    }
  }

  fast() {
    this.fastForward.emit(true);
    this.isPlay = false;
    this.onPlay.emit(this.isPlay);
    this.timeControl.fastForward();
    this.timeControl.pausePlayer();
    this.loopTest();
  }

  back() {
    this.backward.emit(true);
    this.isPlay = false;
    this.onPlay.emit(this.isPlay);
    this.timeControl.backward();
    this.timeControl.pausePlayer();
    this.loopTest();
  }

  changeSpeed() {
    if (this.onSpeed) {
      this.onSpeed = false;
      this.speedStatus = '2x';
      this.timeInterval *= this.speedModifier;
      this.timeControl.toggleSpeed(this.onSpeed);

    } else if (!this.onSpeed) {
      this.onSpeed = true;
      this.speedStatus = '1x';
      this.timeInterval /= this.speedModifier;
      this.timeControl.toggleSpeed(this.onSpeed);
    }
    this.OnSpeed.emit(this.onSpeed);
    if (this.isPlay) {
      this.loopTest();
    }

  }

  loopTest() {
    clearInterval(this.Timer);
    console.log(this.isPlay);
    this.playPauseStatus();
    if (this.isPlay) {
      let start = new Date().getTime(), elapsed = 0.0;
      this.Timer = window.setInterval(() => {
        this.Pulse.emit(this.isPlay);
        this.timeControl.pulsePlay();
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
