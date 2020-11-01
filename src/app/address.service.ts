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
    addressObj.id = this.addressList.length+1;
    this.addressList.push (addressObj);
    return this.addressList.length;
  }

  // Read
  getAddress = (id:number) => {
    return this.addressList.find((item) => item.id === id);
  }

  // Update
  updateAddress = (addressObj: Address): void =>{
    const spliceIndex = this.addressList.findIndex((item) => item.id === addressObj.id);
    this.addressList.splice (spliceIndex, 1, addressObj);

  }

  // Delete
  deleteAddress = (index:number) => {
    return this.addressList.splice(index, 1);
  }

  // Get the complete list
  getAddressList = ():Address[] =>  this.addressList;
  


}
