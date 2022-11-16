import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-cust',
  templateUrl: './add-edit-cust.component.html',
  styleUrls: ['./add-edit-cust.component.css']
})
export class AddEditCustComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() cust:any;
  Id:string;
  Name:string;
  Phone:string;
  Email:string;
  CompanyName:string;

  CompanyList:any=[];

  ngOnInit(): void {
    this.loadCompanyList();
  }

  loadCompanyList(){
    this.service.getAllCompanyNames().subscribe((data:any)=>{
      this.CompanyList=data;

      this.Id=this.cust.Id;
      this.Name=this.cust.Name;
      this.Phone=this.cust.Phone;
      this.Email=this.cust.Email;
      this.CompanyName=this.cust.CompanyName;
    });
  }

  addCustomer(){
    var val = {Id:this.Id,
              Name:this.Name,
              Phone:this.Phone,
              Email:this.Email,
              CompanyName:this.CompanyName};

    this.service.addCustomer(val).subscribe(res=>{
      alert("addCustomer :"+res.toString());
    });
  }

  updateCustomer(){
    var val = { Id:this.Id,
                Name:this.Name,
                Phone:this.Phone,
                Email:this.Email,
                CompanyName:this.CompanyName};

    this.service.updateCustomer(val).subscribe(res=>{
    alert("updateCustomer :"+res.toString());
    });
  }


  uploadPhoto(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      // this.PhotoFileName=data.toString();
      // this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    })
  }

}

