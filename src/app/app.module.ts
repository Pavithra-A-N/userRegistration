import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonalDetailsComponent } from './components/sharedForms/personal-details/personal-details.component';
import { AddressDetailsComponent } from './components/sharedForms/address-details/address-details.component';
import { PaymentDetailsComponent } from './components/sharedForms/payment-details/payment-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { userRegistrationReducer } from './state/user-registration-state/user-registration.reducer';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SuccessScreenComponent } from './components/forms/success-screen/success-screen.component';
import { ProgressStepsComponent } from './components/progress-steps/progress-steps.component';
import { PersonalInformationComponent } from './components/forms/personal-information/personal-information.component';
import { AddressInformationComponent } from './components/forms/address-information/address-information.component';
import { PaymentInformationComponent } from './components/forms/payment-information/payment-information.component';
import { NetworkInterceptor } from './services/shared/network.interceptor';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner'

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    PersonalDetailsComponent,
    AddressDetailsComponent,
    PaymentDetailsComponent,
    SuccessScreenComponent,
    ProgressStepsComponent,
    PersonalInformationComponent,
    AddressInformationComponent,
    PaymentInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({userRegistrationDetails : userRegistrationReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([])
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: NetworkInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
