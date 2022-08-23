import { Injectable } from '@angular/core';
import { IDept } from './idept';
//http client object help get put post del methods
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DeptserviceService {
  //path of the api
url='http://localhost:30263/api/dept'
  constructor() { }
}
