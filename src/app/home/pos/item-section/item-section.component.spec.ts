import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSectionComponent } from './item-section.component';

describe('ItemSectionComponent', () => {
  let component: ItemSectionComponent;
  let fixture: ComponentFixture<ItemSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
