import { Component, Input, OnInit } from '@angular/core';
import { Address } from '../interfaces/address';
import { AddressService } from '../address.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  addressList: Address[];

  constructor(private service: AddressService) {
  }

  ngOnInit(): void {
    console.log(`In AddressList : ${this.service.getAddressList()}`);
    this.addressList = this.service.getAddressList();

  }

  handleSubmit = (e, i):void =>{
    console.log(e.submitter.name );
    if(e.submitter.name === "delete"){
      this.service.deleteAddress(i);
    }else{

      // Navigate to address form to edit
    }


  }

}
