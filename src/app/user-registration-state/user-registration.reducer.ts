import { createReducer, on } from "@ngrx/store";
import { addressInitialState, paymentInitialState, personalInitialState, userRegistrationState } from "../state/app.Model";
import { updateAddressDetails, updatePaymentDetails, updatePersonalDetails } from "./user-registration.action";


export const initialState:userRegistrationState = {
    userDetails: personalInitialState,
    addressDetails: addressInitialState,
    paymentDetails:paymentInitialState
}

export const userRegistrationReducer = createReducer(initialState, 

    on(updatePersonalDetails, (state, action) => ({
        ...state,
        userDetails:action.userDetails
    })),

    on(updateAddressDetails, (state, action) => ({
        ...state,
        addressDetails:action.addressDetails
    })),

    on(updatePaymentDetails, (state, action) => ({
        ...state,
        paymentDetails:action.paymentDetails
    }))
    )