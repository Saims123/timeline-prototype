import { Injectable } from '@angular/core';

@Injectable()
export class SampleObjectsService {
public cats:  string[] = [];

  constructor() {
    this.cats[0] = '/assets/resources/cute-cat.jpg';
    this.cats[1] = '/assets/resources/cute-cat-2.jpg';
    this.cats[2] = '/assets/resources/cute-cat-3.jpg';
    this.cats[3] = '/assets/resources/cute-cat-4.jpg';
   }

   getCats() {
     return this.cats;
   }

}
