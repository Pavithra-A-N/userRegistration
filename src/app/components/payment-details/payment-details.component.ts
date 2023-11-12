import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
PaymentDetailsForm: any;
paymentDetails:any;
paymentData:userRegRequest = requestInitialState;

constructor(private fb:FormBuilder, private router:Router, private store:Store, private paymentService:PaymentService){}

ngOnInit(){
  this.store.select(getPaymentDetails).subscribe((data)=>{
    this.paymentDetails = data;
  })
  this.PaymentDetailsForm= this.fb.group({
  accountOwner: [this.paymentDetails.accountOwner, [Validators.required,Validators.minLength(4)]],
  iban:[this.paymentDetails.iban, Validators.required]
  }
  )
}

get accountOwner(){
  return this.PaymentDetailsForm.get('accountOwner')
}
get iban(){
  return this.PaymentDetailsForm.get('iban');
}

onPrevious(){
this.storePaymentDetails();
this.router.navigate(['/address-details'])
}

onSubmit(){
  this.storePaymentDetails();
  this.paymentService.savePaymentData(this.paymentData);
}

storePaymentDetails(){
  this.paymentDetails= {
    "accountOwner":this.PaymentDetailsForm.value.accountOwner,
    "iban":this.PaymentDetailsForm.value.iban,
  }
  this.paymentData.iban = this.paymentDetails.iban;
  this.paymentData.owner = this.paymentDetails.accountOwner;
  this.paymentData.customerId = this.paymentDetails.iban; //using iban as a unique id
  this.store.dispatch(updatePaymentDetails({paymentDetails: this.paymentDetails}));
}
}
