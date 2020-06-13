import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreTransactionComponent } from './store-transaction.component';

describe('StoreTransactionComponent', () => {
  let component: StoreTransactionComponent;
  let fixture: ComponentFixture<StoreTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
