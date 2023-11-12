import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { paymentDetailState } from 'src/app/state/app.Model';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsViewService {

  constructor(private fb:FormBuilder) { }

  sharedPaymentView(defaultData:paymentDetailState){
    const PaymentDetailsForm= this.fb.group({
      accountOwner: [defaultData.accountOwner, [Validators.required,Validators.minLength(4)]],
      iban:[defaultData.iban, [Validators.required,
       Validators.pattern(/^[A-Za-z]{2}\d*$/)]]
      });
    return PaymentDetailsForm;
  }
}
