import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { personalDetailsState } from 'src/app/state/app.Model';

@Injectable({
  providedIn: 'root'
})
export class PersonalDetailsViewService {

  constructor(private fb: FormBuilder) { }

  sharedPersonalView(defaultData: personalDetailsState){
     const PersonalDetailsForm = this.fb.group({
      firstName:[defaultData.firstName,Validators.required],
      lastName:[defaultData.lastName,Validators.required],
      countryCode:[defaultData.countryCode, Validators.pattern(/^(\+[0-9]{1,3})?$/)],
      phoneNumber:[defaultData.phoneNumber, Validators.pattern(/^[0-9]{9,11}$/)]
     })
     return PersonalDetailsForm;
  }
}
