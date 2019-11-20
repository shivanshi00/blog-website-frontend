import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { UserService } from '../user.service';




@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})


export class EditprofileComponent implements OnInit {

  
  result;
  constructor(private router:Router,private httpservice:UserService,private http:HttpClient) { }
uname;lname;fname;email;pass;
  ngOnInit() {
    this.profile();
   
  }

  profile(){
    this.httpservice.getinfo().subscribe(res=>{
      this.result=res;
      console.log(this.result);
      
    });
  }
  

  
  
url="http://localhost:8800/profile/update";  
  updateprofile(){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.put(this.url,this.result,{headers}).subscribe(data=>{
      console.log(data);
      alert("profile updated");
    });
  }
}
