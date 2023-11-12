import { Component, Input } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent {
  @Input()
  parentGroup!: FormGroup;
  @Input()
  personaldetails: any;
  
  constructor(private fb: FormBuilder,
     private router:Router, private store: Store){}
     
  get firstName(){
    return this.personaldetails.get('firstName');
  }
  get lastName(){
    return this.personaldetails.get('lastName');
  }
  get countryCode(){
    return this.personaldetails.get('countryCode');
  }
  get phoneNumber(){
    return this.personaldetails.get('phoneNumber');
  }
}
