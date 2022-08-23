import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListdeptComponent } from './listdept/listdept.component';
import { AdddeptComponent } from './adddept/adddept.component';
import { EditdeptComponent } from './editdept/editdept.component';
import { FinddeptComponent } from './finddept/finddept.component';


const routes: Routes = [
  {
    path:'add',component: AdddeptComponent},
    {path:'edit/:id', component:EditdeptComponent},
    {path:'list', component:ListdeptComponent},
    {path:'find/:id', component:FinddeptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
