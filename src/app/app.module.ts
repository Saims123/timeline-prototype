import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './home.component';
import { BasicTimelineComponent } from './basic-timeline/basic-timeline.component';
import { TimelineControlComponent } from './basic-timeline/timeline-control/timeline-control.component';
import { TimelineBarComponent } from './basic-timeline/timeline-bar/timeline-bar.component';

import { SampleObjectsService } from './timeline-objects/sample-objects.service';
import { TimeControllerService } from './basic-timeline/time-controller/time-controller.service';

import { AppRouting } from './routing.module/app-routing.module';

import { TimelineTimebarComponent } from './timeline-timebar/timeline-timebar.component';
import { DraggableDirective } from './timeline-timebar/draggable.directive';
import { PlaygroundComponent } from './playground/playground.component';



@NgModule({
  declarations: [
    AppComponent,
    BasicTimelineComponent,
    TimelineControlComponent,
    TimelineBarComponent,
    TimelineTimebarComponent,
    DraggableDirective,
    PlaygroundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRouting
  ],
  providers: [SampleObjectsService, TimeControllerService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
