import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbrbPageComponent } from './nbrb-page.component';

describe('NbrbPageComponent', () => {
  let component: NbrbPageComponent;
  let fixture: ComponentFixture<NbrbPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbrbPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbrbPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
