import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicTimelineComponent } from '../basic-timeline/basic-timeline.component';
import { TimelineTestComponent } from '../timeline-test/timeline-test.component';
import { TimelineTimebarComponent } from '../timeline-timebar/timeline-timebar.component';

const appRoutes: Routes = [
  { path: 'basic', component: BasicTimelineComponent },
  { path: 'map', component: TimelineTestComponent},
    { path: 'timeline', component: TimelineTimebarComponent},
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRouting { }


