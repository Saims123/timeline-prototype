import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineTimebarComponent } from './timeline-timebar.component';

describe('TimelineTimebarComponent', () => {
  let component: TimelineTimebarComponent;
  let fixture: ComponentFixture<TimelineTimebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineTimebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineTimebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
