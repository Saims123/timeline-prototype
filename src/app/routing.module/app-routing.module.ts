import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicTimelineComponent } from '../basic-timeline/basic-timeline.component';
import { TimelineTestComponent } from '../timeline-test/timeline-test.component';
import { LogService } from '@mo-map/core';

const appRoutes: Routes = [
  { path: '/basic', component: BasicTimelineComponent },
  { path: '/map', component: TimelineTestComponent},
];


@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [LogService]
})
export class AppRouting { }


