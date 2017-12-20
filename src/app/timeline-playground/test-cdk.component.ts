import {
  Component,
  Output,
  EventEmitter,
  AfterViewInit,
  ChangeDetectorRef,
  OnChanges
} from '@angular/core';
@Component({
  selector: 'loading-spinner',
  template: `
    <div class="wrapper">
      <h2>Lo0ading . . . </h2>
    </div>
  `,
  styles: [`
    .wrapper { 
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin:0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.4);
      color: white;
    }
  `]
})
export class LoadingSpinnerComponent implements AfterViewInit, OnChanges{ 
@Output() close: EventEmitter<any> = new EventEmitter<any>(); 

constructor() {
}
ngAfterViewInit() {
    //     this.text = 'Loading';
    // console.log(this.text)
    // setInterval(() => { this.text += " . "}, 1000)
}

ngOnChanges(change) {
    console.log(change);
}

}