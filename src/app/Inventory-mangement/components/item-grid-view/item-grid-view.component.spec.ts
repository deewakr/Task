import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGridViewComponent } from './item-grid-view.component';

describe('ItemGridViewComponent', () => {
  let component: ItemGridViewComponent;
  let fixture: ComponentFixture<ItemGridViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemGridViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
