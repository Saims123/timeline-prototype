import { Component, OnInit } from '@angular/core';
import { SampleObjectsService } from '../timeline-objects/sample-objects.service';
import { TimeControllerService } from '../basic-timeline/time-controller/time-controller.service';

@Component({
  selector: 'app-basic-timeline',
  templateUrl: './basic-timeline.component.html',
  styleUrls: ['./basic-timeline.component.css']
})
export class BasicTimelineComponent implements OnInit {
  IMAGE: string;
  count = 0;
  Timer = 0;
  timeInterval = 1000;
  constructor(private sample: SampleObjectsService, private timer: TimeControllerService) {
  }
  ngOnInit() {
    this.timer.setTimeRange(this.sample.cats.length);
  }

startTimer(isOn) {
   clearInterval(this.Timer);
  if (isOn) {
    this.Timer = window.setInterval(() => {this.task(); }, this.timeInterval);
  } else {
    clearInterval(this.Timer);
  }

}

task(): void {

this.count = (this.count + 1) % this.sample.cats.length;
this.IMAGE = this.sample.getCats()[this.count];
}

goForth(state) {
this.task();

}

speedModifier(state) {
  if (state) {
  this.timeInterval /= 2;
  } else {
      this.timeInterval *= 2;
  }
  this.startTimer(true);

}

goBack(state) {
  this.count--;
  if (this.count < 0) {
    this.count = this.sample.cats.length - 1 ;
  }
this.IMAGE = this.sample.getCats()[this.count];

console.log(this.count);
}

updateCount(newCount) {
  this.count = newCount;
  this.IMAGE = this.sample.getCats()[this.count];
}


}
