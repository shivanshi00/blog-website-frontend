


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }
  getUsers()
  {
    return this.http.get('http://localhost:8800/api/getUsers');
  }

  adduser(user) {
    console.log(user);
    return this.http.post('http://localhost:8800/api/addUsers', user).subscribe(res =>
      this.router.navigate(['login']));
  }

  authenticate(username, password) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.http.get ('http://localhost:8800/api/validateUser',{headers}).pipe(
      map(data => {
          sessionStorage.setItem('token', btoa(username + ':' + password));
          return data;
        }

      ));
  }

  isLoggedIn(bool: boolean) {
    sessionStorage.setItem('auth', String(bool));
    return bool;
  }

  authentication(username: any, password: any) {
    throw new Error('Method not implemented.');
  }

  getinfo() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:8800/profile/get',{headers});
  }

  getmyblogs()
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8800/myblogs/getBlogByCurrentUser",{headers});
  }


  getblog(id)
  {
    console.log(id);
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8800/myblogs/getblogById/"+id,{headers});
  }

  editBlog(id,result)
  {
    
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.put("http://localhost:8800/myblogs/update/"+id,result[0],{headers});
  }

  deleteblog(id){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8800/myblogs/deleteblog/"+id,{headers});
  }

  addblog(blog){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.post("http://localhost:8800/myblogs/addblog",blog,{headers});
  }

  getcomments(id){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8800/comments/getbyblog/"+id,{headers});
  }

  addcomment(id,data){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.post("http://localhost:8800/comments/addcomment/"+id,data,{headers});
  }

  deletecomment(id){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8800/comments/deletecomment/"+id,{headers});
  }

  getposts(){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8800/profile/getblogsoffollowing",{headers});
  }

  unfollow(id){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8800/profile/unfollow/"+id,{headers});
  }


  getfollowers(){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8800/profile/getfollowers",{headers});
  }

  getfollowing(){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8800/profile/getfollowing",{headers});
  }

  follow(id){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8800/profile/follow/"+id,{headers});
  }
  remove(id){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8800/profile/deletefollowing/"+id,{headers});
  }

  search(key){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8800/profile/search/"+key,{headers});
  }
  searchblog(key){
    console.log(key);
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8800/myblogs/search/"+key,{headers});
  }

  getprofile(key){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8800/profile/get/"+key,{headers});
  }
}






