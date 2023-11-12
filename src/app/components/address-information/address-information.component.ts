import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addressDetailsState } from 'src/app/state/app.Model';
import { getAddressDetails } from 'src/app/user-registration-state/user-registration.selector';
import { AddressDetailsViewService } from '../services/address-details-view.service';
import { Router } from '@angular/router';
import { updateAddressDetails } from 'src/app/user-registration-state/user-registration.action';

@Component({
  selector: 'app-address-information',
  templateUrl: './address-information.component.html',
  styleUrls: ['./address-information.component.scss']
})
export class AddressInformationComponent {
  addressInfo!: FormGroup;
  addressDetails!:addressDetailsState;

  constructor(private fb:FormBuilder, 
    private store:Store,
    private router:Router,
    private sharedAddressView: AddressDetailsViewService){}

  ngOnInit(){
    this.store.select(getAddressDetails).subscribe((data)=>{
      this.addressDetails = data;
    })
    this.addressInfo = this.fb.group({
      addressdetails: this.sharedAddressView.sharedAddressView(this.addressDetails)
    })
  } 
  onPrevious(){
    this.storeAddressDetails();
    this.router.navigate(['']);
  }
  onNext(){
    this.storeAddressDetails();
    this.router.navigate(['/payment-details']);
  }

  storeAddressDetails(){
    const addressInformation = this.addressInfo.value.addressdetails
    this.addressDetails= {
      "addressLine1":addressInformation.addressLine1,
      "addressLine2":addressInformation.addressLine2,
      "city":addressInformation.city,
      "zipCode":addressInformation.zipCode
    }
    this.store.dispatch(updateAddressDetails({addressDetails: this.addressDetails}))
  }
}

