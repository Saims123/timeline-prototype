import { Component, OnInit, NgModule, VERSION} from '@angular/core';
import { SampleTimeLineObjectsService } from '../timeline-objects/sample-objects.service';



@Component({
  selector: 'app-timeline-playground',
  templateUrl: './timeline-playground.component.html',
  styleUrls: ['./timeline-playground.component.css']
})
export class TimelinePlaygroundComponent implements OnInit {
  timeline: any [] = [];
  selectedImage: string;
  selectedObject: any;
  result: string;

  constructor(private sample: SampleTimeLineObjectsService) {
   this.timeline = this.sample.getTimesteps(); 
   this.selectedImage = this.sample.getSamples()[0].data;
}

  ngOnInit() {

}


getSelectedImage(target) {
  this.selectedObject = target;
  this.selectedImage = this.sample.getTargetSample(target.data)[0].data;
  console.log('Click Event : ', target);
  this.result = JSON.stringify(target)
}

}
