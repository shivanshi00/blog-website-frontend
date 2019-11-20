


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  result:any;
  

  username;password;
  constructor(private userservice:UserService,private router:Router) { }

    login(){
      if(this.username && this.password){
    
        this.userservice.authenticate(this.username,this.password).subscribe(
          data=>
          {
            this.userservice.isLoggedIn(true);
            this.router.navigate(['/home']);
          }
        );
         }
         else{
           alert("fields can not be null"); 
         }
    }

  ngOnInit() {
  }

}
