import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineControlComponent } from './timeline-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('TimelineControlComponent', () => {
  let component: TimelineControlComponent;
  let fixture: ComponentFixture<TimelineControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineControlComponent ],
      imports: [FormsModule, ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
