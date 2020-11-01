import { Component, Input, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AddressService } from '../address.service';
import {Address} from '../interfaces/address'

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

 
  name: string = "";
  addressLine1: string = "";
  addressLine2:string = "";
  addressLine3:string = "";
  city:string = "";
  state:string = "";
  zipcode:number;
  addressList: Address[] = [];
  currentAddress:Address;

  constructor(private service: AddressService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.addressList = this.service.getAddressList();
    // console.log(this.route.queryParamMap);
    this.route.queryParamMap.subscribe((params) => {
			if(params.has("id") ){
        const id:number = parseInt(params.get("id"));
        
        this.currentAddress = this.addressList.find((element) => element.id === id);
        this.name = this.currentAddress.name;
        this.addressLine1 = this.currentAddress.addressLine1;
        this.addressLine2 = this.currentAddress.addressLine2;
        this.addressLine3 = this.currentAddress.addressLine3;
        this.city = this.currentAddress.city;
        this.state = this.currentAddress.state;
        this.zipcode = this.currentAddress.zipcode;
      }
		});
  }

  addAddress(form: NgForm) {
    // console.log(form.value);
    const newAddress: Address = form.value;
    
    if(this.currentAddress){      
      newAddress.id = this.currentAddress.id;
      this.service.updateAddress(newAddress);
    }
    else{
      this.service.addAddress(newAddress);
    }
    
    this.router.navigate(['addressList']);
  }

}
