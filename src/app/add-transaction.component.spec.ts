import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddExpenseComponent } from './add-transaction.component';

describe('AddExpenseComponent', () => {
    let fixture: ComponentFixture<AddExpenseComponent>;
    let component: AddExpenseComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddExpenseComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AddExpenseComponent);
    component = fixture.componentInstance;
  });
  it('should hide modal in cancel', () => {
     component.cancel()
     expect(component.open()).toBe(false);
     expect(component.type()).toBe('expense');
  });
  it('should test addTransaction', () => {
    component.addTransaction();
    const resetSpy = spyOn(component.form, 'reset');
    const transactionAddedSpy = spyOn(component.transactionAdded, 'emit');
    expect(resetSpy).toHaveBeenCalledTimes(0);
    component.form.patchValue({
        amount: 10,
        title: 'Test',
    });
    component.addTransaction();
    expect(resetSpy).toHaveBeenCalled();
    expect(transactionAddedSpy).toHaveBeenCalled();
    component.type.set('income');
    component.form.patchValue({
        amount: 20,
        title: 'Test1',
    });
    component.addTransaction();
    expect(component.form.controls.amount.value).toBe(20);
  });
});
