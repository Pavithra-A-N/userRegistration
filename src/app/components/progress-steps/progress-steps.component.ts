import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getUserDataFeatures } from 'src/app/user-registration-state/user-registration.selector';


@Component({
  selector: 'app-progress-steps',
  templateUrl: './progress-steps.component.html',
  styleUrls: ['./progress-steps.component.scss']
})

export class ProgressStepsComponent {
  userDetails: boolean = false;
  addressDetails: boolean = false;
  paymentDetails: boolean = false;
  constructor(private router: Router, private store: Store) { }

  ngOnInit() {
    this.store.select(getUserDataFeatures).subscribe((data) => {
      this.userDetails = Object.keys(data.userDetails).length > 0 && (data.userDetails.firstName !== "" && data.userDetails.lastName !== "");
      this.addressDetails = Object.keys(data.addressDetails).length > 0 && data.addressDetails.city !== "";
      this.paymentDetails = Object.keys(data.paymentDetails).length > 0 && (data.paymentDetails.accountOwner !== "" && data.paymentDetails.iban !== "");
    });
  }

  getClassName(details: boolean){
    if(details)
    return 'stepper-item completed';
    else
      return 'stepper-item active';
  }
}
