import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user.service';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MustMatch } from '../_helpers/validaters';





@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})


export class SignupComponent implements OnInit {
  result: any;
  alert: String;
  validate: Boolean;
  registerForm: FormGroup;
  submitted = false;
  uname; pass; fname;  email; lname; status;




  constructor(private _activatedroute: ActivatedRoute, private userservice: UserService, private router: Router, private formBuilder: FormBuilder) {
    this.userservice.getUsers().subscribe(res => {
      this.result = res;
      console.log(this.result);
    });
  }
  change(e) {
    for(let i = 0; i < this.result.length; i++) {
      if (this.result[i].username == e) {
        this.alert = 'username already exist';
        this.validate = true;
        break;
      }
      else {
        this.alert = "";
        this.validate = false;
      }
    }
  }

  onSubmit() {
    this.submitted = true;
   // if (this.registerForm.invalid) {
     //   return;
    //}
  
 alert("register successful");
  const user = {
    active: 1,
    status:this.status,
    email: this.email,
    firstname: this.fname,
    followers:[],
    following:[],
    lastname: this.lname,
    password: this.pass,
    username: this.uname
    
  };
  console.log(user);
  this.userservice.adduser(user);

  }

  get f() { return this.registerForm.controls; }


  
  ngOnInit() {
    
  this.registerForm = this.formBuilder.group({
    username: ['', [Validators.required,Validators.minLength(6)]],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    status:['', [Validators.required,Validators.minLength(10)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
}, {
    validator: MustMatch('password', 'confirmPassword')
});
  }

}






  
