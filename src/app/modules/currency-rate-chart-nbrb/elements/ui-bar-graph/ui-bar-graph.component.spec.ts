import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBarGraphComponent } from './ui-bar-graph.component';

describe('UiBarGraphComponent', () => {
  let component: UiBarGraphComponent;
  let fixture: ComponentFixture<UiBarGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiBarGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiBarGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
