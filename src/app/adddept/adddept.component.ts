import { Component, OnInit } from '@angular/core';
import { DeptserviceService } from '../deptservice.service';
import { IDept } from '../idept';
import { Router } from '@angular/router';
//After adding record we want to automatically go to list after clicking save or add.
@Component({
  selector: 'app-adddept',
  templateUrl: './adddept.component.html',
  styleUrls: ['./adddept.component.css']
})
export class AdddeptComponent implements OnInit {
deptdata:IDept={id: 0, name:'', location: ''}
  constructor(private deptservice:DeptserviceService, private router: Router) { }
saveDept(dept:IDept){
  this.deptdata = dept
  this.deptservice.addDept(this.deptdata).subscribe(
    ()=>{
      alert('Record saved successfully')
      this.router.navigate(['/list'])
    }
  )
}
  ngOnInit(): void {
  }

}
