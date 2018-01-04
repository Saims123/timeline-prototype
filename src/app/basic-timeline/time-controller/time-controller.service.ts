import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class TimeControllerService {
  private isPlay: boolean;
  private isSpeed: boolean;
  public forwardBackwardControl$ = new EventEmitter<FlowControl>();
  public playPauseSpeedControl$ = new EventEmitter();
  public timerTickControl$ = new EventEmitter<boolean>();

  constructor() {
    this.isPlay = false;
    this.isSpeed = false;
    this.broadcastControlEvent();
  }

  startPlayer() {
    this.isPlay = true;
    this.broadcastControlEvent();
  }

  pausePlayer() {
    this.isPlay = false;
    this.broadcastControlEvent();
  }

  toggleSpeed(state) {
    this.isSpeed = state;
    this.broadcastControlEvent();
  }

  pulsePlay(){
      this.timerTickControl$.emit(this.isPlay);
  }


  broadcastControlEvent() {
    this.playPauseSpeedControl$.emit(
      {
        play: this.isPlay,
        speed: this.isSpeed,
      }
    );
  }

  fastForward() {
    this.forwardBackwardControl$.emit(FlowControl.FastForward);
  }

  backward() {
    this.forwardBackwardControl$.emit(FlowControl.Backward);
  }

}
enum FlowControl {
  FastForward = 1, Backward
  = -1
}
