import { createFeatureSelector, createSelector } from "@ngrx/store";
import { userRegistrationState } from "../app.Model";

export const getUserDataFeatures= createFeatureSelector<userRegistrationState>('userRegistrationDetails');

export const getUserDetails = createSelector(getUserDataFeatures, (state)=>state.userDetails);
export const getAddressDetails = createSelector(getUserDataFeatures, (state)=>state.addressDetails);
export const getPaymentDetails = createSelector(getUserDataFeatures, (state)=>state.paymentDetails);
