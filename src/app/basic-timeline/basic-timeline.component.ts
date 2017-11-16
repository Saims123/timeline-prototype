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
  constructor(private sample: SampleObjectsService, private timer: TimeControllerService) {
    timer.setTimeRange(sample.cats.length);
  }
  ngOnInit() {

  }

startTimer() {
  this.timer.startTimer(this.timerTask);
}

timerTask() {
  this.IMAGE = this.sample.getCats()[this.count];
  this.count ++;
  if (this.count > this.sample.cats.length - 1) {
    this.count = 0;
  }
}



}
