import { Injectable } from '@angular/core';

@Injectable()
export class SampleObjectsService {
  public samples: any[] = [];

  constructor() {

    this.samples.push(new SampleObject('/assets/resources/cute-cat.jpg', new Date()));
    this.samples.push(new SampleObject('/assets/resources/cute-cat-2.jpg', new Date()));
    this.samples.push(new SampleObject('/assets/resources/cute-cat-3.jpg' , new Date().getMilliseconds()));
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


export class SampleObject {
  static _id = 0;
  private id: number;
  public data: DateTimeFormat;
  public duration: any;
  constructor(_data, _duration) { this.id = SampleObject._id++; this.data = _data; this.duration = _duration; }

  // toString() {
  //   return JSON.stringify(this, null, 2) + '\n';
  // }
}
