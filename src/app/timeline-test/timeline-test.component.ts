import { Component, OnInit } from '@angular/core';
import { LogService } from '@mo-map/core';
@Component({
  selector: 'app-timeline-test',
  templateUrl: './timeline-test.component.html',
  styleUrls: ['./timeline-test.component.css'],
  providers: [LogService]
})
export class TimelineTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
