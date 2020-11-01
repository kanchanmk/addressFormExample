import { Component, Input, OnInit } from '@angular/core';
import { Address } from '../interfaces/address';
import { AddressService } from '../address.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  addressList: Address[];

  constructor(private service: AddressService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.addressList = this.service.getAddressList();

  }

  handleSubmit = (e, i:number, id:number ):void =>{
    if(e.submitter.name === "delete"){
      this.service.deleteAddress(i);
    }else{

      // Navigate to address form to edit
      this.router.navigate(["address"], {
        queryParams: {
          id: id
        },
      });
    }


  }

}
