import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BasicTimelineComponent } from './basic-timeline.component';
import { TimelineControlComponent } from './timeline-control/timeline-control.component';
import { TimelineBarComponent } from './timeline-bar/timeline-bar.component';
import { SampleObjectsService } from '../timeline-objects/sample-objects.service';

describe('BasicTimelineComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicTimelineComponent, TimelineControlComponent, TimelineBarComponent],
      imports: [FormsModule, ReactiveFormsModule, BrowserModule],
      providers: [SampleObjectsService, {provide: ComponentFixtureAutoDetect, userValue: SampleObjectsService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {

  });

  it('should create', () => {
    expect(BasicTimelineComponent).toBeTruthy();
  });
});
