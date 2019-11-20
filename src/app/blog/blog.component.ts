import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})


export class BlogComponent implements OnInit {
id; blogs; title; body;
  constructor(private route :ActivatedRoute,private httpservice:UserService) { 
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap) => {
      this.id=params.get('id');
    });

    this.httpservice.getblog(this.id).subscribe(res=>{
      this.blogs=res;
      console.log(this.blogs);
});
    
    
  }
  edit(){
    this.httpservice.editBlog(this.id,this.blogs).subscribe(res=>{
      this.blogs=res;
      console.log(this.blogs);
      alert("profile updated");
});
  }

}
