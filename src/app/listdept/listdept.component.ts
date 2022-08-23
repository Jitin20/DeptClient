import { Component, OnInit } from '@angular/core';
import { DeptserviceService } from '../deptservice.service';
@Component({
  selector: 'app-listdept',
  templateUrl: './listdept.component.html',
  styleUrls: ['./listdept.component.css']
})
export class ListdeptComponent implements OnInit {
//array of type any
  deptlist: any[] =[]
  //inject service in cosntructor
  constructor(private deptservice:DeptserviceService) {
    //Subscribe is a kind of callback, it is necessary for execution
    //Definition for passing data to the method
    //Client subscribing to the method to get the data
    this.deptservice.getDeptList().subscribe(data=>{this.deptlist=data})
   }

  ngOnInit(): void {
  }

}
