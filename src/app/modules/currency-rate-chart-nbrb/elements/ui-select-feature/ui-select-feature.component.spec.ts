import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSelectFeatureComponent } from './ui-select-feature.component';

describe('UiSelectFeatureComponent', () => {
  let component: UiSelectFeatureComponent;
  let fixture: ComponentFixture<UiSelectFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiSelectFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSelectFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
