import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-cust',
  templateUrl: './show-cust.component.html',
  styleUrls: ['./show-cust.component.css']
})
export class ShowCustComponent implements OnInit {

  constructor(private service:SharedService) { }

  CustomerList:any=[];

  ModalTitle:string;
  ActivateAddEditCustComp:boolean=false;
  cust:any;

  ngOnInit(): void {
    //alert("In ShowCustComponent::ngOnInit");
    this.refreshCustList();
  }

  addClick(){
    this.cust={
      Id:0,
      Name:"",
      Phone:"",
      Email:"",
      CompanyName:"",
    }
    this.ModalTitle="Add Customer";
    this.ActivateAddEditCustComp=true;

  }

  editClick(item){
    console.log(item);
    this.cust=item;
    this.ModalTitle="Edit Customer";
    this.ActivateAddEditCustComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteCustomer(item.Id).subscribe(data=>{
        alert("deleteClick :"+data.toString());
        this.refreshCustList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditCustComp=false;
    this.refreshCustList();
  }


  refreshCustList(){
    this.service.getCustList().subscribe(data=>{
      //alert("refreshEmpList :"+data);
      this.CustomerList=data;
    });    
  }

}

