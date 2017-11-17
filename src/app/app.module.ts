import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FooterComponent} from '@mo/footer';


import { AppComponent } from './home.component';
import { BasicTimelineComponent } from './basic-timeline/basic-timeline.component';
import { TimelineControlComponent } from './timeline-control/timeline-control.component';
import { TimelineBarComponent } from './timeline-bar/timeline-bar.component';

import {SampleObjectsService} from './timeline-objects/sample-objects.service';
import { TimeControllerService } from './basic-timeline/time-controller/time-controller.service';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    BasicTimelineComponent,
    TimelineControlComponent,
    TimelineBarComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [SampleObjectsService, TimeControllerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
