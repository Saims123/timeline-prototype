import { Injectable } from '@angular/core';

@Injectable()
export class TimeControllerService {
  private timeInterval = 1; // By default
  private intervalId = 0;
  private timeRange = 0;
  private currentTime = 0;

  constructor() {
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }

  startTimer(callback: () => void): void {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      callback();
      if (this.currentTime > this.timeRange) {
        this.currentTime = 0;
      }
      this.currentTime++;
    }, this.timeInterval * 1000);
  }

  changeTime(num) {
    this.currentTime += num;
  }

  setTimeRange(num) {
    this.timeRange = num;
  }

  setTimeInterval(num) {
    this.timeInterval = num;
  }

}
