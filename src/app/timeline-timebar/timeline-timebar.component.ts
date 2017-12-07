import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-timebar',
  templateUrl: './timeline-timebar.component.html',
  styleUrls: ['./timeline-timebar.component.css']
})
export class TimelineTimebarComponent implements OnInit {
timeline: any;
dateline: any;
  constructor() {
    this.dateline = new TimelineDateSystem(7).getDays();
    this.timeline = new TimelineDateSystem(7).timeline;
    console.log(this.timeline);
  }

  ngOnInit() {
  }

}


enum Days {
  Mon = 1, Tue = 2, Wed = 3, Thurs = 4, Fri = 5, Sat = 6, Sun = 0
}

class TimelineDateSystem {
    private day: any;
     timeStep: number;
     dateline: number[] = [];
     timeline: any[] = [];
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

    private addHours(hour: number) {
      return hour * 60 * 1000;
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
