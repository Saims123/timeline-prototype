import {
  Component,
  Output,
  EventEmitter
} from '@angular/core';
@Component({
  selector: 'loading-spinner',
  template: `
    <div class="wrapper">
      <h2>Loading...</h2>
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
      height:80%;
      width:80%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.4);
      color: white;
    }
  `]
})
export class LoadingSpinnerComponent { 
@Output() close: EventEmitter<any> = new EventEmitter<any>(); 
constructor() {}


}