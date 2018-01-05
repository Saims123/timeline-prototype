import { Component, OnInit, DoCheck, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { SampleTimeLineObjectsService } from '../timeline-objects/sample-objects.service';
import { TimeControllerService } from '../basic-timeline/time-controller/time-controller.service';

@Component({
  selector: 'app-timeline-timebar',
  templateUrl: './timeline-timebar.component.html',
  styleUrls: ['./timeline-timebar.component.css']
})
export class TimelineTimebarComponent implements OnInit, OnChanges {
  timeline: any[] = [];
  dateline: any;
  tempDataTag: any;
  dataTag = 0;
  slide: number;
  isDown = false;
  timelineBar: any;

  timeControlSubscription: any;
  testSub: any;


  public days = 0;
  @Input() timeData: any[] = [];
  @Output() selected = new EventEmitter<any>();

  constructor(private sample: SampleTimeLineObjectsService, private timeControl: TimeControllerService) {
    this.days = this.sample.calculateDayDiff();
    this.populateData();

  }


  ngOnInit() {
    this.timelineBar = document.getElementById('timeline').getBoundingClientRect();
    this.revealResult();

    this.timelineControlSubscription();
    this.timelineTimerControlSubscription();



  }

  ngOnChanges() {
    this.populateData();
    this.timelineBar = document.getElementById('timeline').getBoundingClientRect();

  }

  timelineControlSubscription() {
    this.timeControlSubscription = this.timeControl.forwardBackwardControl$.subscribe((data) => {
      this.forwardBackwardControl(data);
      console.log('TimelineBar : ', data);
    });
  }

  timelineTimerControlSubscription() {
    this.testSub = this.timeControl.timerTickControl$.subscribe((data) => {
      if (data) {
        this.increment();
      }
    });
  }



  populateData() {
    this.timeline = [];
    //Modify Risk @1
    this.dateline = new TimelineDateSystem(this.days).getDays();
    //this.timeline = new TimelineDateSystem(this.days).timeline; Direct Dependancy on Mock data is removed
    this.timeline = this.timeData;
  }

  forwardBackwardControl(state) {
    if (state == 1) {
      this.increment();
    } else {
      this.decrement();
    }
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


  eventDown(e) {
    this.isDown = true;
    this.modifySliderPos(e);
  }

  eventClick(e) {
    this.isDown = true;
    this.modifySliderPos(e);
    this.isDown = false;
  }

  eventUp() {
    this.isDown = false;
    this.tempDataTag = this.dataTag;
  }

  modifySliderPos(e) {
    let small = document.getElementById('subSection').clientWidth;
    if (this.isDown) {
      this.dataTag =
        Math.ceil(((((e.clientX) - (e.target.offsetWidth - this.timelineBar.left) / 2) / this.timelineBar.width)) * this.timeline.length);
      this.slide = ((this.dataTag * (this.timelineBar.width - small)) / (this.timeline.length - 1)) - 5;
      //this.slide = (((e.clientX - this.timelineBar.left) % this.timelineBar.width) - 5)
      this.calculateSliderPos();
    }
  }

  previewDataHover(e) {
    this.tempDataTag =
      Math.ceil(((((e.clientX) - (e.target.offsetWidth - this.timelineBar.left) / 2) / this.timelineBar.width)) * this.timeline.length);
    let data = { id: this.tempDataTag, data: this.timeline[this.tempDataTag] };
    this.selected.emit(data);
    // this.IMAGE = this.sample.getTargetSample(this.timeline[this.tempDataTag])[0].data;
  }

  revealResult() {
    let data = { id: this.dataTag, data: this.timeline[this.dataTag] };
    this.selected.emit(data);

  }


  findDataSector(e) {
    this.dataTag =
      Math.ceil(((((e.clientX) - (e.target.offsetWidth - this.timelineBar.left) / 2) / this.timelineBar.width)) * this.timeline.length);
    if (this.dataTag >= this.timeline.length) {
      //this.dataTag --;
    } else if (this.dataTag <= 0) {
      this.dataTag = 0;
    }
    this.revealResult();
    //console.log(e.screenX + ' // ' + e.clientX + ' // ' + e.target.clientWidth + ' // ' + this.timelineBar);
    //console.log(window.innerWidth , document.getElementById('timeline').offsetWidth);
  }

  calculateSliderPos() {
    this.timelineBar = document.getElementById('timeline').getBoundingClientRect();
    let small = document.getElementById('subSection').clientWidth;
    this.slide = ((this.dataTag * (this.timelineBar.width - small)) / (this.timeline.length - 1)) - 5;
    this.revealResult();
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
      this.day = Days[(this.clock.getDay() + i) % 7];
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