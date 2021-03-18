import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiButtonToggleComponent } from './ui-button-toggle.component';

describe('UiButtonToggleComponent', () => {
  let component: UiButtonToggleComponent;
  let fixture: ComponentFixture<UiButtonToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiButtonToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiButtonToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
