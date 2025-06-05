import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInvoiceButtonComponent } from './new-invoice-button.component';

describe('NewInvoiceButtonComponent', () => {
  let component: NewInvoiceButtonComponent;
  let fixture: ComponentFixture<NewInvoiceButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewInvoiceButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewInvoiceButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
