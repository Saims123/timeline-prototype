import { Injectable } from '@angular/core';

@Injectable()
export class SampleObjectsService {
  public samples: any[] = [];

  constructor() {

    this.samples.push(new SampleObject('/assets/resources/cute-cat.jpg'));
    this.samples.push(new SampleObject('/assets/resources/cute-cat-2.jpg'));
    this.samples.push(new SampleObject('/assets/resources/cute-cat-3.jpg'));
    this.samples.push(new SampleObject('/assets/resources/cute-cat-4.jpg'));
    this.samples.push(new SampleObject('/assets/resources/solar1.jpg'));
    this.samples.push(new SampleObject('/assets/resources/solar2.jpg'));
    this.samples.push(new SampleObject('/assets/resources/solar3.jpg'));
    this.samples.push(new SampleObject('/assets/resources/weather1.gif'));
    this.samples.push(new SampleObject('/assets/resources/weather2.jpg'));
    this.samples.push(new SampleObject('/assets/resources/weather3.jpg'));
    this.samples.push(new SampleObject('/assets/resources/weather4.jpg'));
    SampleObject._id = 0;
  }

  getSamples() {
    return this.samples;
  }

}


export class SampleObject {
  static _id = 0;
  private id: number;
  public data: any;
  constructor(_data) { this.id = SampleObject._id++; this.data = _data; }

  // toString() {
  //   return JSON.stringify(this, null, 2) + '\n';
  // }
}
