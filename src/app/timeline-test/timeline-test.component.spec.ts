import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineTestComponent } from './timeline-test.component';
import { LayerModule } from '@mo-map/layer';
import { MoMapModule } from '@mo-map/core';
describe('TimelineTestComponent', () => {
  let component: TimelineTestComponent;
  let fixture: ComponentFixture<TimelineTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineTestComponent ],
      imports: [LayerModule, MoMapModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
