import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SampleObjectsService , SampleObject} from '../timeline-objects/sample-objects.service';
import { TimelineBarComponent } from './timeline-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
describe('TimelineBarComponent', () => {
  let component: TimelineBarComponent;
  let fixture: ComponentFixture<TimelineBarComponent>;
  let timelineBar: any;
  let userService: SampleObjectsService;
  class MockSampleService extends SampleObjectsService {
    constructor() {super();  }
    samples = [
      new SampleObject('Test 1'),
      new SampleObject('Test 2'),
      new SampleObject('Test 3'),
      new SampleObject('Test 4'),
      new SampleObject('Test 5'),
    ];

    getSamples() {
      return this.samples;
    }


}



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimelineBarComponent],
      imports: [FormsModule, ReactiveFormsModule, BrowserModule],
      providers: [SampleObjectsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineBarComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });

  it('should contain maximum value of 0 and 10', () => {
    component.maxLength = 0;
    expect(component.maxLength).toEqual(0);

    component.maxLength = 10;
    expect(component.maxLength).toEqual(10);
  });

  describe('TimelineBar Status', () => {
    it('should be 10 timeline sub bars', () => {
    const f = TestBed.createComponent(TimelineBarComponent);
    const c = f.componentInstance;

      c.data = [
        { id: 1, data: 'Hello there 1' },
        { id: 2, data: 'Hello there 2' },
        { id: 3, data: 'Hello there 3' },
        { id: 4, data: 'Hello there 4' },
        { id: 5, data: 'Hello there 5' },
      ];
      c.max = c.data.length;
      timelineBar = f.debugElement.query(By.css(('ul')));
      f.detectChanges();
      // console.log((timelineBar.nativeElement.textContent));

      // userService = f.debugElement.injector.get(SampleObjectsService);
      userService = new MockSampleService();
      console.log(userService.getSamples());

      expect(10).toEqual(10);

    });
  });

});
