import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeptserviceService } from '../deptservice.service';
import { IDept } from '../idept';

@Component({
  selector: 'app-editdept',
  templateUrl: './editdept.component.html',
  styleUrls: ['./editdept.component.css']
})
export class EditdeptComponent implements OnInit {
deptdata:IDept={id:0, name:'', location:''}
id:number = 0

  constructor(private deptservice: DeptserviceService, private activatedroute:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const tid= this.activatedroute.snapshot.paramMap.get('id')
    this.id=Number(tid)
    this.deptservice.getDept(this.id).subscribe((data:IDept)=>{this.deptdata=data})
  }
  saveDept(dept:IDept){
    console.log(this.deptdata)
    this.deptdata=dept
    this.deptservice.editDept(this.deptdata).subscribe(
      ()=>{
        alert("record edited")
        this.router.navigate(['/list'])
      }
    )
  }

}
