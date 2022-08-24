import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListdeptComponent } from './listdept/listdept.component';
import { AdddeptComponent } from './adddept/adddept.component';
import { EditdeptComponent } from './editdept/editdept.component';
import { FinddeptComponent } from './finddept/finddept.component';
import { ShowdeptComponent } from './showdept/showdept.component';



const routes: Routes = [
  {
    path:'add',component: AdddeptComponent},
    {path:'edit/:id', component:EditdeptComponent},
    {path:'list', component:ListdeptComponent},
    {path:'find/:id', component:FinddeptComponent},
    {path:'showdept', component:ShowdeptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
