import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciousMetalsTableComponent } from './precious-metals-table.component';

describe('PreciousMetalsTableComponent', () => {
  let component: PreciousMetalsTableComponent;
  let fixture: ComponentFixture<PreciousMetalsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreciousMetalsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreciousMetalsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
