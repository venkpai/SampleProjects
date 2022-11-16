import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="https://localhost:7199/api";

  constructor(private http:HttpClient) { }

  getComList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/company');
  }

  addCompany(val:any){
    return this.http.post(this.APIUrl+'/Company',val);
  }

  updateCompany(val:any){
    return this.http.put(this.APIUrl+'/Company',val);
  }

  deleteCompany(val:any){
    return this.http.delete(this.APIUrl+'/Company/'+val);
  }

  // getEmpList():Observable<any[]>{
  //   var val = this.http.get<any>(this.APIUrl+'/Employee');
  //   alert("getEmpList :" + JSON.stringify(val));
  //   return val; //this.http.get<any>(this.APIUrl+'/Employee');
  // }

  getCustList():Observable<any[]>{
    var val = this.http.get<any>(this.APIUrl + '/Customer');
    //alert("getCustList :" + JSON.stringify(val));
    return val; //this.http.get<any>(this.APIUrl + '/Customer');
  }  

  addCustomer(val:any){
    return this.http.post(this.APIUrl+'/Customer',val);
  }

  updateCustomer(val:any){
    return this.http.put('https://localhost:7199/api'+'/Customer',val);
  }

  deleteCustomer(val:any){
    return this.http.delete(this.APIUrl+'/Customer/'+val);
  }


  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Customer/SaveFile',val);
  }

  getAllCompanyNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Customer/GetAllCompanyNames');
  }

}
