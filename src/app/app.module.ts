import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddressComponent } from './address/address.component';
import { FormsModule } from '@angular/forms';
import { AddressListComponent } from './address-list/address-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    AddressListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
