import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AddressComponent } from './address/address.component';
import { AddressListComponent } from './address-list/address-list.component';

const routes: Routes = [
  { path: 'address', component: AddressComponent },
  { path: 'addressList', component: AddressListComponent },
  // { path: '', redirectTo: '/address', pathMatch: 'full' },
  // { path: '**', component: AddressComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
