import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCartSectionComponent } from './item-cart-section.component';

describe('ItemCartSectionComponent', () => {
  let component: ItemCartSectionComponent;
  let fixture: ComponentFixture<ItemCartSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCartSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCartSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
