import { Component, OnInit } from '@angular/core';
import { Address } from '../interfaces/address';
import { AddressService } from '../address.service';

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
    this.addressList = this.service.getAddressList();

  }

}
