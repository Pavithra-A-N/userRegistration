import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { paymentDetailState, paymentInitialState, requestInitialState, userRegRequest } from 'src/app/state/app.Model';
import { PaymentDetailsViewService } from '../../viewservices/payment-details-view.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { getPaymentDetails } from 'src/app/state/user-registration-state/user-registration.selector';
import { PaymentService } from 'src/app/services/payment.service';
import { updatePaymentDetails } from 'src/app/state/user-registration-state/user-registration.action';
import { LoadingService } from 'src/app/services/shared/loading.service';

@Component({
  selector: 'app-payment-information',
  templateUrl: './payment-information.component.html',
  styleUrls: ['./payment-information.component.scss']
})
export class PaymentInformationComponent {
  paymentInfo!: FormGroup;
  paymentDetails:paymentDetailState = paymentInitialState;
  paymentData:userRegRequest =requestInitialState;
  public loading$ = this.loader.loading$; //variable to show the loading screen when service call is triggered
  
  constructor(private fb: FormBuilder, 
    private sharedPaymentService:PaymentDetailsViewService,
    private store:Store,
    private paymentService:PaymentService,
    private router:Router,
    private loader:LoadingService){}

    ngOnInit(){  
      this.store.select(getPaymentDetails).subscribe((data)=>{
        this.paymentDetails = data;
      })
      this.paymentInfo = this.fb.group({
        paymentdetails: this.sharedPaymentService.sharedPaymentView(this.paymentDetails)
      })
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
        const paymentInformation = this.paymentInfo.value.paymentdetails
        this.paymentDetails= {
          "accountOwner":paymentInformation.accountOwner,
          "iban":paymentInformation.iban,
        }
        this.paymentData.iban = this.paymentDetails.iban;
        this.paymentData.owner = this.paymentDetails.accountOwner;
        this.paymentData.customerId = this.paymentDetails.iban; //using iban as a unique id
        this.store.dispatch(updatePaymentDetails({paymentDetails: this.paymentDetails}));
      }
}
