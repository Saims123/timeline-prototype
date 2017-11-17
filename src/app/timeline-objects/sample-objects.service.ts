import { Injectable } from '@angular/core';

@Injectable()
export class SampleObjectsService {
  public samples: SampleObject[] = [];

  constructor() {
    this.samples[0] = new SampleObject('/assets/resources/cute-cat.jpg');
    this.samples[1] = new SampleObject('/assets/resources/cute-cat-2.jpg');
    this.samples[2] = new SampleObject('/assets/resources/cute-cat-3.jpg');
    this.samples[3] = new SampleObject('/assets/resources/cute-cat-4.jpg');
    this.samples[4] = new SampleObject('/assets/resources/solar1.jpg');
    this.samples[5] = new SampleObject('/assets/resources/solar2.jpg');
    this.samples[6] = new SampleObject('/assets/resources/solar3.jpg');
  }

  getsamples() {
    console.log(this.samples);
    return this.samples;
  }

}


 class SampleObject {
  static _id = 0;
  private id: number;
  public data: any;
  constructor(_data) { this.id = SampleObject._id ++; this.data = _data; }

}
