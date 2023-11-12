import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PaymentService } from 'src/app/services/payment.service';
import { paymentDataState, paymentInitialState, requestInitialState, userRegRequest } from 'src/app/state/app.Model';
import { updatePaymentDetails } from 'src/app/user-registration-state/user-registration.action';
import { getPaymentDetails } from 'src/app/user-registration-state/user-registration.selector';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})

export class PaymentDetailsComponent {
  @Input()
  parentGroup!: FormGroup;
  @Input()
  paymentdetails: any

  constructor(private fb: FormBuilder, private router: Router, private store: Store, private paymentService: PaymentService) { }

  get accountOwner() {
    return this.paymentdetails.get('accountOwner')
  }
  get iban() {
    return this.paymentdetails.get('iban');
  }

}
