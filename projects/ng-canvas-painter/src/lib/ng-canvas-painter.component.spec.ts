import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCanvasPainterComponent } from './ng-canvas-painter.component';

describe('NgCanvasPainterComponent', () => {
  let component: NgCanvasPainterComponent;
  let fixture: ComponentFixture<NgCanvasPainterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgCanvasPainterComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCanvasPainterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
