import {
  Component,
  Output,
  EventEmitter,
  AfterViewInit,
  OnChanges, OnInit
} from '@angular/core';
@Component({
  selector: 'loading-spinner',
  template: `
    <div class="wrapper">
      <h2>{{text}}}</h2>
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
export class LoadingSpinnerComponent implements AfterViewInit, OnInit{ 

text: string;
constructor() {
}
ngAfterViewInit() {
  setTimeout(() => {
    this.text = 'Loading';
     console.log(this.text)
   setInterval(() => { this.text += " . "}, 1000)
  });
}

ngOnInit() {


}

}