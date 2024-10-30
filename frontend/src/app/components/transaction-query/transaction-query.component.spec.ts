import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionQueryComponent } from './transaction-query.component';

describe('TransactionQueryComponent', () => {
  let component: TransactionQueryComponent;
  let fixture: ComponentFixture<TransactionQueryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionQueryComponent]
    });
    fixture = TestBed.createComponent(TransactionQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
