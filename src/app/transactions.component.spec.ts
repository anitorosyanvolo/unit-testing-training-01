import { ComponentFixture, TestBed } from '@angular/core/testing';
import TransactionsComponent from './transactions.component';

describe('TransactionsComponent', () => {
    let fixture: ComponentFixture<TransactionsComponent>;
    let component: TransactionsComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionsComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;
  });
  it('should open dialog', () => {
    component.openAddTransactionDialog();
    expect(component.addTransactionDialogOpen()).toBe(true);
  });
  it('should delete transaction', () => {
    const length = component.transactions().length;
    component.deleteTransaction(1);
    expect(component.transactions().length).toBe(length-1);
  });
  it('should check currentBalance', () => {
    const balance = component.currentBalance();
    component.addTransaction({ title: 'Test', amount: 10});
    expect(component.currentBalance()).toBe(balance+10);
  });
});
