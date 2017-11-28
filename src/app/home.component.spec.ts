import { TestBed, async, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { BasicTimelineComponent } from './basic-timeline/basic-timeline.component';
import { TimelineControlComponent } from './timeline-control/timeline-control.component';
import { TimelineBarComponent } from './timeline-bar/timeline-bar.component';
import { TimelineTestComponent } from './timeline-test/timeline-test.component';
import { LayerModule } from '@mo-map/layer';
import { MoMapModule } from '@mo-map/core';
const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'basic', component: BasicTimelineComponent },
  { path: 'map', component: TimelineTestComponent },
];

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, BasicTimelineComponent, TimelineTestComponent, TimelineControlComponent, TimelineBarComponent
      ],
      imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes), LayerModule, MoMapModule],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}, {provide: ComponentFixtureAutoDetect, userValue: true}]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular 5');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Angular 5!');
  }));
});
