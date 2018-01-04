import { Component, OnInit, NgModule, VERSION, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { LoadingSpinnerService } from './test-cdk.service';
import { LoadingSpinnerComponent } from './test-cdk.component';
@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  public date: string;

  constructor(private loading: LoadingSpinnerService, private cd: ChangeDetectorRef) {
    this.date = new Date().toJSON();
  }

  ngOnInit() {
        this.loadData();
    this.cd.detectChanges();
  }
  
  loadData() {
    this.loading.reveal();
    setTimeout(() => {
      this.loading.hide();
    }, 5000);
  }

}
