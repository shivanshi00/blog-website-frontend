import { Component, OnInit } from '@angular/core';


import { ActivatedRoute,ParamMap } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})





export class BlogPostComponent implements OnInit {
id ;blog; comment; body;date;
data;
  constructor(private route :ActivatedRoute,private httpservice:UserService) { }

  ngOnInit(){
    this.route.paramMap.subscribe((params : ParamMap) => {
      this.id=params.get('id');
    });

    this.httpservice.getblog(this.id).subscribe(res=>{
      this.blog=res;
      console.log(this.blog);
});

this.httpservice.getcomments(this.id).subscribe(res=>{
  this.comment=res;
  console.log(this.comment);
});
  }



addcomment(id){
  console.log(id);
  const data = {
    body:this.body,
    createDate: this.date
  };
  console.log(data);
  alert("comment added!!");
this.httpservice.addcomment(this.id,data).subscribe(res=>{
  this.comment=res;
  console.log(this.comment);
  this.ngOnInit();
});
}

delete(id){
  this.httpservice.deletecomment(this.id).subscribe(res=>{
    this.comment=res;
    console.log(this.comment);
    alert("comment deleted!!");
  });
}

}