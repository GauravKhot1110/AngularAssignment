import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCartListComponent } from './add-cart-list.component';

describe('AddCartListComponent', () => {
  let component: AddCartListComponent;
  let fixture: ComponentFixture<AddCartListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCartListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
