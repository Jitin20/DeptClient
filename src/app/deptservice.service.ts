import { Injectable } from '@angular/core';
import { IDept } from './idept';
//http client object help get put post del methods
import {HttpClient, HttpHeaders} from '@angular/common/http';
//Getting error messages from Api
import { HttpErrorResponse } from '@angular/common/http';
//reactive xtension for JS
import { catchError, throwError } from 'rxjs';
//to work on single component or updation of the single component not full page
import { Observable } from 'rxjs';
import { IDeptinfo } from './ideptinfo';

@Injectable({
  providedIn: 'root'
})
export class DeptserviceService {
  //path of the api
url='http://localhost:30263/api/dept'
httpOptions ={headers: new HttpHeaders({'Content-type':'application/json'})}
  
constructor(private httpclient:HttpClient) { }
  getDeptList():Observable<any>{
    return this.httpclient.get<any[]>(this.url+'/ListDept').pipe(catchError(this.handleError))
  }
 // To get the details
  getDept(id:number):Observable<IDept>
  {
    return this.httpclient.get<IDept>(this.url + '/ListDept/'+id).pipe(catchError(this.handleError))
  }
  addDept(deptdata:IDept):Observable<IDept>
  {//data object sent to the datadept using httpoptions
    return this.httpclient.post<IDept>(this.url+"/adddept", deptdata, this.httpOptions).pipe(catchError(this.handleError))
  }
 editDept(deptdata:IDept):Observable<IDept>
 {
  return this.httpclient.put<IDept>(this.url+"/editdept/"+deptdata.id, this.httpOptions).pipe(catchError(this.handleError))
 }  

showdeptinfo():Observable<any>
{
  return this.httpclient.get<any[]>(this.url + "/ShowDept")
}

handleError(error:HttpErrorResponse){
  let errormessage =''
  errormessage = error.status+'\n'+error.statusText+'\n'+error.error
  alert(errormessage)
  return throwError(errormessage)
}
 
}
