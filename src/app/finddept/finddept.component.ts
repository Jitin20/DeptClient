import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeptserviceService } from '../deptservice.service';
import { IDept } from '../idept';

@Component({
  selector: 'app-finddept',
  templateUrl: './finddept.component.html',
  styleUrls: ['./finddept.component.css']
})
export class FinddeptComponent implements OnInit {
//How to capture the data from the URL.
deptdata:IDept={id:0, name: '', location:''}

id: number=0
  constructor(private deptservice:DeptserviceService, private activateroute: ActivatedRoute) {
  } 

  ngOnInit(): void {
    //capture the id from method
    //this is string type, convert into number then 
    const tid = this.activateroute.snapshot.paramMap.get('id')
    this.id = Number(tid)
    //Sending it to service
    this.deptservice.getDept(this.id).subscribe((data:IDept)=>{this.deptdata=data})

  }

}
