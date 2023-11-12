import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { addressDetailsState} from 'src/app/state/app.Model';

@Injectable({
  providedIn: 'root'
})
export class AddressDetailsViewService {

  constructor(private fb: FormBuilder) {}

  sharedAddressView(defaultData:addressDetailsState){
    const AddressDetailsForm = this.fb.group({
      addressLine1: [defaultData.addressLine1, Validators.maxLength(40)],
      addressLine2:[defaultData.addressLine1, Validators.maxLength(40)],
      city:[defaultData.city,[Validators.required,Validators.maxLength(20)]],
      zipCode:[defaultData.zipCode,Validators.pattern(/^\d{6}$/)]
     })
     return AddressDetailsForm;
  }
   
}
