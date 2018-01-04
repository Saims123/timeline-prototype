import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class TimeControllerService {
  private isPlay: boolean;
  private isSpeed: boolean;
  public flowControl$ = new EventEmitter<FlowControl>();
  public playPauseSpeedControl$ = new EventEmitter();
  constructor() {
    this.isPlay = false;
    this.isSpeed = false;
  }

  startPlayer() {
    this.isPlay = true;
    
  }

  pausePlayer() {

  }

broadcastControlEvent() {
  this.playPauseSpeedControl$.emit(
    {
      play: this.isPlay,
      speed: this.isSpeed,
    }
  );
}


}
enum FlowControl {
  FastForward = 1, Backward
  = -1
}
