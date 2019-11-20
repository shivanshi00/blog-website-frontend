import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  


date=new Date();
 title;body;result;posts;search;status;
  constructor(private blogservice:UserService,private router:Router) { }

  ngOnInit() {
    this.blogservice.getinfo().subscribe(res=>{
      this.result=res;
      console.log(this.result);
    });

    this.blogservice.getposts().subscribe(res=>{
      this.posts=res;
      console.log(this.posts);
    });
  }

  post(){
  alert("posted");
  const blog = {
    body:this.body,
    title: this.title,
    create_date: this.date,
    status:this.status
  };
  console.log(blog);
  this.blogservice.addblog(blog).subscribe(res=>{
    console.log('added to database');
    console.log(res);
  })
  }

  logout(){
    sessionStorage.removeItem('token');
  this.blogservice.isLoggedIn(false);
  this.router.navigate(['login']);
  }

  view(id){
    this.router.navigate(['post/',id]);
  }

  unfollow(id){
    this.blogservice.unfollow(id).subscribe(res=>{
      this.router.navigate(['home']);
    });
  }
  searchUser(key){
    if(key){
    this.blogservice.search(key).subscribe(res=>{
      this.search=res;
      console.log(res);
    })
  }
  else{
    this.search=[];
  }
  }

  searchblog(key){
    if(key){
    this.blogservice.searchblog(key).subscribe(res=>{
      this.posts=res;
      console.log(res);
    })
  }
  else{
    this.ngOnInit();
  }
  }

  userprofile(id){
    this.router.navigate(['people/',id]);
  }

}