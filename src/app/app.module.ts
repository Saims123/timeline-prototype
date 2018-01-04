import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './home.component';
import { BasicTimelineComponent } from './basic-timeline/basic-timeline.component';
import { TimelineControlComponent } from './basic-timeline/timeline-control/timeline-control.component';
import { TimelineBarComponent } from './basic-timeline/timeline-bar/timeline-bar.component';

import { SampleObjectsService , SampleTimeLineObjectsService} from './timeline-objects/sample-objects.service';
import { TimeControllerService } from './basic-timeline/time-controller/time-controller.service';

import { AppRouting } from './routing.module/app-routing.module';

import { TimelineTimebarComponent } from './timeline-timebar/timeline-timebar.component';
import { DraggableDirective } from './timeline-timebar/draggable.directive';
import { PlaygroundComponent } from './playground/playground.component';
import { TimelinePlaygroundComponent} from './timeline-playground/timeline-playground.component';
import { LoadingSpinnerService} from './playground/test-cdk.service';
import {LoadingSpinnerComponent} from './playground/test-cdk.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicTimelineComponent,
    TimelineControlComponent,
    TimelineBarComponent,
    TimelineTimebarComponent,
    DraggableDirective,
    PlaygroundComponent,
    TimelinePlaygroundComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRouting
  ],
  providers: [SampleObjectsService, TimeControllerService, SampleTimeLineObjectsService, LoadingSpinnerService],
  bootstrap: [AppComponent],
  entryComponents: [ LoadingSpinnerComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
