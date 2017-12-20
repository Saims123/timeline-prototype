import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinePlaygroundComponent } from './timeline-playground.component';

describe('TimelinePlaygroundComponent', () => {
  let component: TimelinePlaygroundComponent;
  let fixture: ComponentFixture<TimelinePlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelinePlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelinePlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
