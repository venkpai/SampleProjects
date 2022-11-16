import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-com',
  templateUrl: './add-edit-com.component.html',
  styleUrls: ['./add-edit-com.component.css']
})
export class AddEditComComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() com:any;
  CompanyId:string;
  CompanyName:string;

  ngOnInit(): void {
    this.CompanyId=this.com.CompanyId;
    this.CompanyName=this.com.CompanyName;
  }

  addCompany(){
    var val = {CompanyId:this.CompanyId,
                CompanyName:this.CompanyName};
    this.service.addCompany(val).subscribe(res=>{
      alert("addCompany :"+res.toString());
    });
  }

  updateCompany(){
    var val = {CompanyId:this.CompanyId,
      CompanyName:this.CompanyName};
    this.service.updateCompany(val).subscribe(res=>{
    alert("updateCompany :"+res.toString());
    });
  }

}
