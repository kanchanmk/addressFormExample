import { Injectable } from '@angular/core';
import {Address} from './interfaces/address';


@Injectable({
  providedIn: 'root'
})
export class AddressService {

  addressList: Address[] =[];

  constructor() { }

  // Create 
  addAddress = (addressObj: Address):number =>{

    this.addressList.push (addressObj);

    return this.addressList.length;
  }

  // Read
  getAddress = (name:string) => {
    return this.addressList.find((item) => item.name === name);
  }

  // Update
  updateAddress = (addressObj: Address): void =>{
    const spliceIndex = this.addressList.findIndex((item) => item.name === name);

    this.addressList.splice (spliceIndex, 1)
    this.addressList.push ( addressObj);

  }

  // Delete
  deleteAddress = (name:string) => {
    const spliceIndex = this.addressList.findIndex((item) => item.name === name);
    return this.addressList.splice(spliceIndex, 1);
  }

  // Get the complete list
  getAddressList = ():Address[] =>  this.addressList;
  


}
