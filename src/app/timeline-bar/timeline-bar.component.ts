import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-timeline-bar',
  templateUrl: './timeline-bar.component.html',
  styleUrls: ['./timeline-bar.component.css']
})
export class TimelineBarComponent implements OnInit, OnChanges {
  @Input('min') min = 0;
  @Input('max') max: number;
  @Input('current')current: number;
  @Input('step') step = 1;
  @Input('data') data: any;
  @Output()currentValue = new EventEmitter<number>();

  maxLength = 0;
  minLength = 0;
  steps = 0;
  currentPointer = 0;
  samples: any [] = [];
  constructor() {

  }

  ngOnInit() {
    this.maxLength = this.max;
    this.minLength = this.min;
    this.step = this.steps;
    this.samples = this.data;
  }

  ngOnChanges(changes: SimpleChanges) {
      this.currentPointer = changes['current'].currentValue;
      this.currentValue.emit(this.currentPointer);
      console.log('Changes ', changes['current'].currentValue);
      console.log('Current Pointer :', this.currentPointer);
  }

  update() {
      this.currentValue.emit(this.currentPointer);
      console.log(this.currentPointer);
  }


}
