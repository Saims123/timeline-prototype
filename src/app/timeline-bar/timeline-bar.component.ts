import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-timeline-bar',
  templateUrl: './timeline-bar.component.html',
  styleUrls: ['./timeline-bar.component.css']
})
export class TimelineBarComponent implements OnInit {
@Input('min')min: number;
@Input('max')max: number;
@Input('step')step: number;

maxLength = 0;
minLength = 0;
steps = 0;
currentPointer = 0;
  constructor() {
    this.maxLength = this.max;
    this.minLength = this.min;
    this.step = this.steps;
  }

  ngOnInit() {
  }


update() {

}


}
