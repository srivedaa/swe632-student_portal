import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  showiderror:boolean=false;
  showpwderror:boolean=false;
  showHeader:boolean=false;
  showLogin:boolean=false;
  showthingsLikederror:boolean=false;


  constructor(private fb: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      netid:['', Validators.required],
      pwd:['', Validators.required]
    })
  }

  onSubmit(): void{

  }

  login(): void{
    var id = this.loginForm.get("netid").value;
    var password = this.loginForm.get("pwd").value;

    if(id==""||id!="student"){
      this.showiderror=true;
    }else if(password==""||password!="swe632"){
      this.showpwderror=true;
    }

    if(id=="student"&&password=="swe632"){
      this.showHeader = true;
      this.router.navigate(['/dashboard']);
      // window.location.href="http://localhost:4200/dashboard";
    }
   
  }


onFocusMethod():void{
  this.showiderror=false;
  this.showpwderror=false;
}

onBlurMethod():void{
  var id = this.loginForm.get("netid").value;
  var password = this.loginForm.get("pwd").value;
  var sub = this.loginForm.get("subjects").value;

  if(id==""||id!="student"){
    this.showiderror=true;
  }else if(password==""||password!="swe632"){
    this.showpwderror=true;
  }
}
}


