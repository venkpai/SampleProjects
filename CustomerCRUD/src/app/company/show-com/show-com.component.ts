import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-com',
  templateUrl: './show-com.component.html',
  styleUrls: ['./show-com.component.css']
})
export class ShowComComponent implements OnInit {

  constructor(private service:SharedService) { }

  CompanyList:any=[];

  ModalTitle:string;
  ActivateAddEditComComp:boolean=false;
  com:any;

  CompanyIdFilter:string="";
  CompanyNameFilter:string="";
  CompanyListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshComList();
  }

  addClick(){
    this.com={
      CompanyId:0,
      CompanyName:""
    }
    this.ModalTitle="Add Company";
    this.ActivateAddEditComComp=true;

  }

  editClick(item){
    this.com=item;
    this.ModalTitle="Edit Company";
    this.ActivateAddEditComComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteCompany(item.CompanyId).subscribe(data=>{
        alert("deleteClick :"+data.toString());
        this.refreshComList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditComComp=false;
    this.refreshComList();
  }


  refreshComList(){
    this.service.getComList().subscribe(data=>{
      this.CompanyList=data;
      this.CompanyListWithoutFilter=data;
    });
  }

  FilterFn(){
    var CompanyIdFilter = this.CompanyIdFilter;
    var CompanyNameFilter = this.CompanyNameFilter;

    this.CompanyList = this.CompanyListWithoutFilter.filter(function (el){
        return el.CompanyId.toString().toLowerCase().includes(
          CompanyIdFilter.toString().trim().toLowerCase()
        )&&
        el.CompanyName.toString().toLowerCase().includes(
          CompanyNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop,asc){
    this.CompanyList = this.CompanyListWithoutFilter.sort(function(a,b){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
