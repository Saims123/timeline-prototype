import { Component, OnInit } from '@angular/core';
import { SampleObjectsService } from '../timeline-objects/sample-objects.service';

@Component({
  selector: 'app-basic-timeline',
  templateUrl: './basic-timeline.component.html',
  styleUrls: ['./basic-timeline.component.css']
})
export class BasicTimelineComponent implements OnInit {
  IMAGE: string;
  count = 0;
  Timer = 0;
  maxCount = 0;
  timeInterval = 1000;
  obj: any [];
  isOn: boolean;
  constructor(private sample: SampleObjectsService) {
      this.maxCount = sample.samples.length;
      this.obj = sample.getSamples();
  }
  ngOnInit() {

  }

startTimer(isOn) {
   clearInterval(this.Timer);
  if (isOn) {
    this.Timer = window.setInterval(() => {this.task(); }, this.timeInterval);
  } else {
    clearInterval(this.Timer);
  }
  this.isOn = isOn;

}

task(): void {

this.count = (this.count + 1) % this.maxCount;
this.IMAGE = this.sample.getSamples()[this.count].data;
}

goForth(state) {
this.task();
}

speedModifier(state) {
  if (state) {
  this.timeInterval /= 4;
  } else {
      this.timeInterval *= 4;
  }
  if (this.isOn) {
  this.startTimer(true);
  }

}

goBack(state) {
  this.count--;
  if (this.count < 0) {
    this.count = this.maxCount - 1 ;
  }
this.IMAGE = this.sample.getSamples()[this.count].data;
}

updateCount(newCount) {
  console.log('Update Count', newCount);
  this.count = newCount;
  this.IMAGE = this.sample.getSamples()[this.count].data;
}


}
