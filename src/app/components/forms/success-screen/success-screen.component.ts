import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addressInitialState, paymentInitialState, personalInitialState } from 'src/app/state/app.Model';
import { updateAddressDetails, updatePaymentDetails, updatePersonalDetails } from 'src/app/state/user-registration-state/user-registration.action';
import { getUserDataFeatures } from 'src/app/state/user-registration-state/user-registration.selector';

@Component({
  selector: 'app-success-screen',
  templateUrl: './success-screen.component.html',
  styleUrls: ['./success-screen.component.scss']
})
export class SuccessScreenComponent {
  errorMessage = localStorage.getItem("errorMessage")
  paymentDataId=localStorage.getItem('paymentId');
  paymentId = "ID : "+this.paymentDataId?.slice(0,15)+"....";

  constructor(private store:Store, private router:Router){}

  registerAgain(){
    let addressDetails = addressInitialState;
    let paymentDetails = paymentInitialState;
    let personalDetails = personalInitialState;
    this.store.dispatch(updateAddressDetails({addressDetails: addressDetails}));
    this.store.dispatch(updatePersonalDetails({userDetails:personalDetails}));
    this.store.dispatch(updatePaymentDetails({paymentDetails:paymentDetails}))
    this.store.select(getUserDataFeatures).subscribe((data) => {
    console.log(data);
    });
    localStorage.removeItem('paymentId');
    this.router.navigate(['/personal-details'])
  }
}
