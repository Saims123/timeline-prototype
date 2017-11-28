import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '@mo/footer';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './home.component';
import { BasicTimelineComponent } from './basic-timeline/basic-timeline.component';
import { TimelineControlComponent } from './timeline-control/timeline-control.component';
import { TimelineBarComponent } from './timeline-bar/timeline-bar.component';

import { SampleObjectsService } from './timeline-objects/sample-objects.service';
import { TimeControllerService } from './basic-timeline/time-controller/time-controller.service';
import { TimelineTestComponent } from './timeline-test/timeline-test.component';
import { AppRouting } from './routing.module/app-routing.module';

// Map Components
import { LayerModule } from '@mo-map/layer';
import { MoMapModule } from '@mo-map/core';

const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'basic', component: BasicTimelineComponent},
  { path: 'map', component: TimelineTestComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    BasicTimelineComponent,
    TimelineControlComponent,
    TimelineBarComponent,
    FooterComponent,
    TimelineTestComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    LayerModule,
    MoMapModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [SampleObjectsService, TimeControllerService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
