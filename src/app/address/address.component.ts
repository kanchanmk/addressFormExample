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
  address1: string = "";
  address2:string = "";
  address3:string = "";
  city:string = "";
  zipcode:number;
  addressList: Address[] = [];

  constructor(private service: AddressService, private router: Router , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.addressList = this.service.getAddressList();
  }

  addAddress(form: NgForm) {
    // console.log(form.value);
    const newAddress: Address = form.value;
    this.service.addAddress(newAddress);
    this.router.navigate(['addressList']);
  }

}
