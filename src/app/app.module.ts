import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListdeptComponent } from './listdept/listdept.component';
import { FinddeptComponent } from './finddept/finddept.component';
import { AdddeptComponent } from './adddept/adddept.component';
import { EditdeptComponent } from './editdept/editdept.component';

@NgModule({
  declarations: [
    AppComponent,
    ListdeptComponent,
    FinddeptComponent,
    AdddeptComponent,
    EditdeptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
