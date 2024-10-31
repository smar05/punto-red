import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyRechargeComponent } from './buy-recharge.component';

describe('BuyRechargeComponent', () => {
  let component: BuyRechargeComponent;
  let fixture: ComponentFixture<BuyRechargeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyRechargeComponent]
    });
    fixture = TestBed.createComponent(BuyRechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
