import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElCardComponent } from './el-card.component';

describe('ElCardComponent', () => {
  let component: ElCardComponent;
  let fixture: ComponentFixture<ElCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
