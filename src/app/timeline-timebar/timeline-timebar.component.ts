import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-timebar',
  templateUrl: './timeline-timebar.component.html',
  styleUrls: ['./timeline-timebar.component.css']
})
export class TimelineTimebarComponent implements OnInit {
  timeline: any;
  timelineTag: string[] = [];
  dateline: any;
  dataTag: any;
  slide: number;
  isDown = false;
  private days: number;
  constructor() {
    this.days = 3;
    this.dateline = new TimelineDateSystem(this.days).getDays();
    this.timeline = new TimelineDateSystem(this.days).timeline;

   this.timeline.forEach((item) => {
      this.timelineTag.push(item.toLocaleDateString()  + ' ' + item.toLocaleTimeString());
   });
   console.log(this.timelineTag);


    console.log(this.timeline);
  }

  ngOnInit() {

  }


  eventDown(e) {
      this.isDown = true;
      this.modifySliderPos(e);
  }
  eventUp() {
    this.isDown = false;
  }


  modifySliderPos(e) {
  e.preventDefault();
  if (this.isDown) {
  this.slide = e.clientX - 5;
  console.log(this.slide);
  }
}

  findDataSector(e) {
  this.dataTag = Math.floor(((e.offsetX / e.target.clientWidth)) * this.timeline.length);
  console.log(e.offsetX + ' // ' +  e.target.clientWidth);
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
      for (let x = 0; x < 24; x++) {
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
