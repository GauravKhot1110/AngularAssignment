import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBolgsComponent } from './all-bolgs.component';

describe('AllBolgsComponent', () => {
  let component: AllBolgsComponent;
  let fixture: ComponentFixture<AllBolgsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllBolgsComponent]
    });
    fixture = TestBed.createComponent(AllBolgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
