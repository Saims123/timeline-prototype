import { Injectable } from '@angular/core';
import * as timezone from 'moment-timezone';
import * as moment from 'moment';

@Injectable()
export class SampleObjectsService {
  public samples: any[] = [];

  constructor() {
    this.samples.push(new SampleObject('/assets/resources/cute-cat.jpg', new Date()));
    this.samples.push(new SampleObject('/assets/resources/cute-cat-2.jpg', new Date()));
    this.samples.push(new SampleObject('/assets/resources/cute-cat-3.jpg', new Date()));
    this.samples.push(new SampleObject('/assets/resources/cute-cat-4.jpg', new Date()));
    this.samples.push(new SampleObject('/assets/resources/solar1.jpg', new Date()));
    this.samples.push(new SampleObject('/assets/resources/solar2.jpg', new Date()));
    this.samples.push(new SampleObject('/assets/resources/solar3.jpg', new Date()));
    this.samples.push(new SampleObject('/assets/resources/weather1.gif', new Date()));
    this.samples.push(new SampleObject('/assets/resources/weather2.jpg', new Date()));
    this.samples.push(new SampleObject('/assets/resources/weather3.jpg', new Date()));
    this.samples.push(new SampleObject('/assets/resources/weather4.jpg', new Date()));
    SampleObject._id = 0;
    console.log(this.samples);
  }

  getSamples() {
    return this.samples;
  }

  getValue() {
    return false;
  }
}



@Injectable()
export class SampleTimeLineObjectsService {
  public timeline_sample: any[] = [];

  constructor() {
    this.timeline_sample.push(new SampleObject('/assets/resources/timeline-images/Time1.png', moment().add(0, 'hour').toJSON()));
    this.timeline_sample.push(new SampleObject('/assets/resources/timeline-images/Time2.png', moment().add(1, 'hour').toJSON()));
    this.timeline_sample.push(new SampleObject('/assets/resources/timeline-images/Time3.png', moment().add(2, 'hour').toJSON()));
    this.timeline_sample.push(new SampleObject('/assets/resources/timeline-images/Time4.png', moment().add(3, 'hour').toJSON()));
    this.timeline_sample.push(new SampleObject('/assets/resources/timeline-images/Time5.png', moment().add(4, 'hour').toJSON()));
    this.timeline_sample.push(new SampleObject('/assets/resources/timeline-images/Time6.png', moment().add(5, 'hour').toJSON()));
    this.timeline_sample.push(new SampleObject('/assets/resources/timeline-images/Time7.png', moment().add(6, 'hour').toJSON()));
    this.timeline_sample.push(new SampleObject('/assets/resources/timeline-images/Time8.png', moment().add(7, 'hour').toJSON()));
    this.timeline_sample.push(new SampleObject('/assets/resources/timeline-images/Time9.png', moment().add(8, 'hour').toJSON()));
    this.timeline_sample.push(new SampleObject('/assets/resources/timeline-images/Time10.png', moment().add(9, 'hour').toJSON()));
    SampleObject._id = 0;

    console.log(this.timeline_sample);
  }

  getSamples() {
    return this.timeline_sample;
  }

  getTargetSample(date: any) {
    return this.timeline_sample.filter((data) => {
      console.log(date);
        return data.duration === date;
    }).pop();
  }

}


export class SampleObject<String, value> {
  static _id = 0;
  private id: number;
  public data: DateTimeFormat;
  public duration: any;
  constructor(_data, _duration) { this.id = SampleObject._id++; this.data = _data; this.duration = _duration; }
}
