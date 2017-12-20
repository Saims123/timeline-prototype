import { Component, OnInit, NgModule, VERSION } from '@angular/core';
import { LoadingSpinnerService } from '../timeline-playground/test-cdk.service';
import { LoadingSpinnerComponent } from '../timeline-playground/test-cdk.component';
@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  public date: string;

  constructor(private loading: LoadingSpinnerService) {
    this.date = new Date().toJSON();
  }

  ngOnInit() {
    this.loadData();
  }


  loadData() {
    this.loading.reveal();
    setTimeout(() => {
      this.loading.hide();
    }, 5000);
  }

}
