import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTimelineComponent } from './basic-timeline.component';

describe('BasicTimelineComponent', () => {
  let component: BasicTimelineComponent;
  let fixture: ComponentFixture<BasicTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
