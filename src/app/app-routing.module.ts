import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessScreenComponent } from './components/success-screen/success-screen.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { AddressInformationComponent } from './components/address-information/address-information.component';
import { PaymentInformationComponent } from './components/payment-information/payment-information.component';

const routes: Routes = [
  {
    component:PersonalInformationComponent,
    path:""
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
