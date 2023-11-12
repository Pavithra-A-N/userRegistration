import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { personalInitialState } from 'src/app/state/app.Model';
import { updatePersonalDetails } from 'src/app/user-registration-state/user-registration.action';
import { getUserDetails } from 'src/app/user-registration-state/user-registration.selector';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent {
  PersonalDetailsForm: any;
  personalDetails:any = personalInitialState;
  
  constructor(private fb: FormBuilder, private router:Router, private store: Store){}
  ngOnInit(){
   this.store.select(getUserDetails).subscribe((data)=>{
    this.personalDetails = data;
   }) 
   this.PersonalDetailsForm = this.fb.group({
    firstName:[this.personalDetails.firstName,Validators.required],
    lastName:[this.personalDetails.lastName,Validators.required],
    countryCode:[this.personalDetails.countryCode,Validators.maxLength(4)],
    phoneNumber:[this.personalDetails.phoneNumber,[Validators.maxLength(11)]]
   })
  }
  get firstName(){
    return this.PersonalDetailsForm.get('firstName');
  }
  get lastName(){
    return this.PersonalDetailsForm.get('lastName');
  }
  get countryCode(){
    return this.PersonalDetailsForm.get('countryCode');
  }
  get phoneNumber(){
    return this.PersonalDetailsForm.get('phoneNumber');
  }
  
  onNext(){
    this.personalDetails= {
      "firstName":this.PersonalDetailsForm.value.firstName,
      "lastName":this.PersonalDetailsForm.value.lastName,
      "countryCode":this.PersonalDetailsForm.value.countryCode,
      "phoneNumber":this.PersonalDetailsForm.value.phoneNumber
    }
    this.store.dispatch(updatePersonalDetails({userDetails: this.personalDetails}))
    this.router.navigate(['/address-details'])
  }
}
