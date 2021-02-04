import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBasicElementComponent } from './table-basic-element.component';

describe('TableBasicElementComponent', () => {
  let component: TableBasicElementComponent;
  let fixture: ComponentFixture<TableBasicElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableBasicElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBasicElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
