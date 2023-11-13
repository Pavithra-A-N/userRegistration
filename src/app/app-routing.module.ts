import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessScreenComponent } from './components/forms/success-screen/success-screen.component';
import { PersonalInformationComponent } from './components/forms/personal-information/personal-information.component';
import { AddressInformationComponent } from './components/forms/address-information/address-information.component';
import { PaymentInformationComponent } from './components/forms/payment-information/payment-information.component';

const routes: Routes = [
  {
    component:PersonalInformationComponent,
    path:""
  },
  {
    component:PersonalInformationComponent,
    path:"personal-details"
  },
  {
   component:AddressInformationComponent,
   path:'address-details'
  },
  {
    component:PaymentInformationComponent,
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
