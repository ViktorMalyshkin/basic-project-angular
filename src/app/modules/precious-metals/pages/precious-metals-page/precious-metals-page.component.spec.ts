import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciousMetalsPageComponent } from './precious-metals-page.component';
import { Store, StoreModule } from '@ngrx/store';

describe('PreciousMetalsPageComponent', () => {
  let component: PreciousMetalsPageComponent;
  let fixture: ComponentFixture<PreciousMetalsPageComponent>;
  let store: Store;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ PreciousMetalsPageComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreciousMetalsPageComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
