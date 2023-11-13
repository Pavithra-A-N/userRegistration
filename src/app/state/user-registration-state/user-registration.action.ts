import { createAction, props } from "@ngrx/store";
import {addressDetailsState, paymentDetailState, personalDetailsState, userRegistrationState} from "../app.Model";

export const updatePersonalDetails = createAction('Update User Personal Details', props<{userDetails:personalDetailsState}>());
export const updateAddressDetails = createAction('Update User Address Details', props<{addressDetails:addressDetailsState}>());
export const updatePaymentDetails = createAction('Update User Payment Details', props<{paymentDetails:paymentDetailState}>());