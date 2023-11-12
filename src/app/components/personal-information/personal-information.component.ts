import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PersonalDetailsViewService } from '../services/personal-details-view.service';
import { personalDetailsState } from 'src/app/state/app.Model';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { updatePersonalDetails } from 'src/app/user-registration-state/user-registration.action';
import { getUserDetails } from 'src/app/user-registration-state/user-registration.selector';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent {
  personalInfo!: FormGroup;
  personalDetails!:personalDetailsState;
  
  constructor(private fb: FormBuilder, 
    private sharedPersonalView:PersonalDetailsViewService,
    private store:Store,
    private router:Router){}

  ngOnInit(){  
    this.store.select(getUserDetails).subscribe((data)=>{
      this.personalDetails = data;
    }) 
    this.personalInfo = this.fb.group({
      personaldetails: this.sharedPersonalView.sharedPersonalView(this.personalDetails)
    })
  }
  onNext(){
    const personalInformation = this.personalInfo.value.personaldetails
    this.personalDetails= {
      "firstName":personalInformation.firstName,
      "lastName":personalInformation.lastName,
      "countryCode":personalInformation.countryCode,
      "phoneNumber":personalInformation.phoneNumber
    }
    this.store.dispatch(updatePersonalDetails({userDetails: this.personalDetails}))
    this.router.navigate(['/address-details'])
  }
}


