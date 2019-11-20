import { Component, OnInit } from '@angular/core';




import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { UserService } from "../user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})





export class ProfileComponent implements OnInit {

  result;blogs;

  constructor(private router:Router,private httpservice:UserService,private http:HttpClient) { }
  uname;lname;fname;email;pass;status;
  ngOnInit() {
    this.profile();
  }

  profile(){
    this.httpservice.getinfo().subscribe(res=>{
      this.result=res;
      console.log(this.result);
    });
    this.httpservice.getmyblogs().subscribe(res=>{
      this.blogs=res;
      console.log(this.blogs);
    });
  }
  editProfile(){
    this.router.navigate(['editprof']);
  }


  delete(id){
    this.httpservice.deleteblog(id).subscribe(res=>{
      this.blogs=res;
      console.log(this.blogs);
    })
  }

  
}
