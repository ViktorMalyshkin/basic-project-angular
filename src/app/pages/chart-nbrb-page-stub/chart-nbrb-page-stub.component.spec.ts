import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartNbrbPageStubComponent } from './chart-nbrb-page-stub.component';

describe('ChartNbrbPageStubComponent', () => {
  let component: ChartNbrbPageStubComponent;
  let fixture: ComponentFixture<ChartNbrbPageStubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartNbrbPageStubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartNbrbPageStubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
