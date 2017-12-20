import { Component, OnInit, OnChanges } from '@angular/core';
import * as moment from 'moment';
import { SampleTimeLineObjectsService } from '../timeline-objects/sample-objects.service';

@Component({
  selector: 'app-timeline-timebar',
  templateUrl: './timeline-timebar.component.html',
  styleUrls: ['./timeline-timebar.component.css']
})
export class TimelineTimebarComponent implements OnInit, OnChanges {
  timeline: any;
  timelineTag: string[] = [];
  tempDataTag: number;
  dateline: any;
  dataTag = 0;
  slide: number;
  isDown = false;
  result: string;
  timelineBarWidth: number;
  IMAGE: string;
  protected days: number = 0;

  constructor(public sample: SampleTimeLineObjectsService) {
    this.days = this.sample.calculateDayDiff();
    this.populateData();
    this.result = this.dataTag + ' : ' + this.timelineTag[Math.ceil(this.dataTag)];
    this.IMAGE = this.sample.getTargetSample(this.timelineTag[this.dataTag])[0].data;
  }

  populateData() {
    this.timelineTag = [];

    //Modify Risk @1 
    this.dateline = new TimelineDateSystem(this.days).getDays();
    //this.timeline = new TimelineDateSystem(this.days).timeline;
    this.timeline = this.sample.getTimesteps();

    this.timeline.forEach((item) => {
      this.timelineTag.push(item);
    });
  }

  increase() {
    this.days++;
    this.ngOnChanges();
  }
  decrease() {
    this.days--;
    this.ngOnChanges();
  }


  increment() {
    this.dataTag++;
    this.dataTag %= this.timeline.length;
    this.calculateSliderPos();
  }

  decrement() {
    this.dataTag--;
    this.dataTag = (this.dataTag >= 0 ? this.dataTag-- : this.timeline.length - 1);
    this.calculateSliderPos();
  }


  ngOnInit() {
  }

  ngOnChanges() {
    this.timelineBarWidth = document.getElementById('timeline').offsetWidth;
    this.populateData();
  }

  eventDown(e) {
    this.isDown = true;
    this.modifySliderPos(e);
  }

  eventClick(e) {
    this.isDown = true;
    console.log(this.IMAGE);
    this.modifySliderPos(e);
    this.isDown = false;
  }

  eventUp() {
    this.isDown = false;
  }

  modifySliderPos(e) {
    let diff = document.getElementById('timeline').getBoundingClientRect();
    let small = document.getElementById('subSection').clientWidth;
    this.findDataSector(e);
    if (this.isDown) {
      this.slide = (((e.clientX - diff.left) % diff.width) - 5)
      this.calculateSliderPos();
    }

  }

  previewDataHover(e) {
    let diff = document.getElementById('timeline').getBoundingClientRect();
    this.tempDataTag =
      Math.ceil(((((e.clientX) - (e.target.offsetWidth - diff.left) / 2) / this.timelineBarWidth)) * this.timeline.length);
  }




  findDataSector(e) {
    this.timelineBarWidth = document.getElementById('timeline').offsetWidth;
    let diff = document.getElementById('timeline').getBoundingClientRect();
    //console.log(diff);
    this.dataTag =
      Math.ceil(((((e.clientX) - (e.target.offsetWidth - diff.left) / 2) / this.timelineBarWidth)) * this.timeline.length);
    //console.log(e.screenX + ' // ' + e.clientX + ' // ' + e.target.clientWidth + ' // ' + this.timelineBarWidth);
    //console.log(window.innerWidth , document.getElementById('timeline').offsetWidth);

    if (this.dataTag >= this.timeline.length) {
      //this.dataTag --;
    } else if (this.dataTag <= 0) {
      this.dataTag = 0;
    }
    this.result = this.dataTag + ' : ' + this.timelineTag[Math.ceil(this.dataTag)];
  }



  calculateSliderPos() {
    let diff = document.getElementById('timeline').getBoundingClientRect();
    let small = document.getElementById('subSection').clientWidth;
    this.slide = ((this.dataTag * (diff.width - small)) / (this.timeline.length - 1)) - 5;
    this.IMAGE = this.sample.getTargetSample(this.timelineTag[this.dataTag])[0].data;
    this.result = this.dataTag + ' : ' + this.timelineTag[Math.ceil(this.dataTag)];
  }


  looper(e) {
    if (e = true) {
      this.increment();
    }
  }

}






enum Days {
  Mon = 1, Tue = 2, Wed = 3, Thurs = 4, Fri = 5, Sat = 6, Sun = 0
}

class TimelineDateSystem {
  private day: any;
  timeStep: number;
  dateline: number[] = [];
  timeline: Date[] = [];
  private clock = new Date();
  constructor(step) {

    for (let i = 0; i < step; i++) {
      this.day = Days[(this.clock.getDay() + i + 1) % 7];
      this.dateline.push(this.day);


      for (let x = 0; x < 12; x++) {
        let time = new Date(this.clock.setHours(x)).setDate(this.clock.getDate() + i);
        this.timeline.push(new Date(time));
      }


    }
    console.log(this.timeline);
  }

  public getDays() {
    let timelineStr: any[] = [];
    this.dateline.forEach((item) => {
      timelineStr.push(item);
    });
    console.log(timelineStr);
    return timelineStr;
  }
}
