import { StoreConfig } from "@ngrx/store"

export interface userRegistrationState{
    userDetails:personalDetailsState,
    addressDetails:addressDetailsState,
    paymentDetails:paymentDetailState
}

export interface paymentDataState{
    id:Number,
    owner:String,
    iban:String
}

export interface personalDetailsState{
    firstName:String,
    lastName:String,
    countryCode:String,
    phoneNumber:String
}

export  const personalInitialState: personalDetailsState={
 firstName:"",
 lastName:"",
 countryCode:"",
 phoneNumber:""
}

export interface addressDetailsState{
    addressLine1:String
    addressLine2:String,
    city:String,
    zipCode: String
}
export const addressInitialState: addressDetailsState ={
    addressLine1: "",
    addressLine2: "",
    city: "",
    zipCode: ""
}

export interface paymentDetailState{
    accountOwner:String,
    iban:String
}

export const paymentInitialState:paymentDetailState ={
    accountOwner: "",
    iban: ""
}

export interface userRegRequest{
    owner:String,
    customerId:String,
    iban:String
}

export const requestInitialState:userRegRequest ={
        "owner":"",
        "customerId":"",
        "iban":""
}