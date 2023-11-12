import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { AddressDetailsComponent } from './components/address-details/address-details.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { SuccessScreenComponent } from './components/success-screen/success-screen.component';
//import { UserRegistrationComponent } from './components/user-registration/user-registration.component';

const routes: Routes = [
  {
    component:PersonalDetailsComponent,
    path:''
  },
  {
   component:AddressDetailsComponent,
   path:'address-details'
  },
  {
    component:PaymentDetailsComponent,
    path:'payment-details'
  },
  {
    component:SuccessScreenComponent,
    path:'success-screen'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
