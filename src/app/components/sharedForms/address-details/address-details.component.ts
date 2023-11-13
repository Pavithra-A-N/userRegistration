import { Component, Input } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss']
})
export class AddressDetailsComponent {
@Input()
parentGroup!: FormGroup;
@Input()
addressdetails: any;
constructor(private fb: FormBuilder, private router:Router, private store: Store){
}

get addressLine1(){
  return this.addressdetails.get('addressLine1');
}
get addressLine2(){
  return this.addressdetails.get('addressLine2');
}
get city(){
  return this.addressdetails.get('city');
}
get zipCode(){
  return this.addressdetails.get('zipCode');
}

}
