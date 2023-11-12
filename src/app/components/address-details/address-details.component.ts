import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { updateAddressDetails } from 'src/app/user-registration-state/user-registration.action';
import { getAddressDetails } from 'src/app/user-registration-state/user-registration.selector';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss']
})
export class AddressDetailsComponent {
AddressDetailsForm: any;
addressDetails:any;
constructor(private fb: FormBuilder, private router:Router, private store: Store){
}
ngOnInit(){
  this.store.select(getAddressDetails).subscribe((data)=>{
    this.addressDetails = data;
  })
  this.AddressDetailsForm = this.fb.group({
    addressLine1: this.addressDetails.addressLine1,
    addressLine2:this.addressDetails.addressLine2,
    city:[this.addressDetails.city,Validators.maxLength(10)],
    zipCode:[this.addressDetails.zipCode,[Validators.minLength(7), Validators.maxLength(11)]]
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
  this.addressDetails= {
    "addressLine1":this.AddressDetailsForm.value.addressLine1,
    "addressLine2":this.AddressDetailsForm.value.addressLine2,
    "city":this.AddressDetailsForm.value.city,
    "zipCode":this.AddressDetailsForm.value.zipCode
  }
  this.store.dispatch(updateAddressDetails({addressDetails: this.addressDetails}))
}
}
