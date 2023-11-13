import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getPaymentDetails } from '../state/user-registration-state/user-registration.selector';
import { requestInitialState, userRegRequest, userRegistrationState } from '../state/app.Model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  paymentUrl: string = "https://37f32cl571.execute-api.eu-central-1.amazonaws.com/default/wunderfleet-recruiting-backend-dev-save-payment-data";
  constructor(private store: Store<userRegistrationState>, private httpClient: HttpClient, private router:Router) {}
  

  savePaymentData(requestData: userRegRequest) {
    this.httpClient.post<any>(this.paymentUrl,JSON.stringify(requestData)).subscribe((res: any) => {
      localStorage.setItem("paymentId", res.paymentDataId);
      this.router.navigate(['/success-screen'])
      }, error => {
        localStorage.setItem("errorMessage", error);
        this.router.navigate(['/success-screen'])
      })
  }
}
