import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {
  uname;lname;fname;email;pass;followers;following;
  result;blogs;
  constructor(private router:Router,private httpservice:UserService,private http:HttpClient) { }

  ngOnInit() {
    this.profile();
  }
  unfollow(id){
    this.httpservice.unfollow(id).subscribe(res=>{
      this.router.navigate(['profile']);
    });
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

    this.httpservice.getfollowers().subscribe(res=>{
      this.followers=res;
      console.log(this.followers);
    });

    this.httpservice.getfollowing().subscribe(res=>{
      this.following=res;
      console.log(this.following);
    });
  }

  remove(id){
    this.httpservice.remove(id).subscribe(res=>{
      this.router.navigate(['profile']);
    });
  }
}
