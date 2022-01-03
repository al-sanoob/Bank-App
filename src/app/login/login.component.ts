import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatasService } from '../services/datas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // slogan="Your Perfect Banking Partner!"

  // accno="Enter Your AccountNo:" //usd for checking property binding

  acno = ""

  pwd = ""

  loginForm = this.fb.group({
  
    acno: ['',[Validators.required,Validators.pattern('[0-9]*')]],

    pwd: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

  })

  constructor(private router: Router, private ds: DatasService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  // acnoChange(event:any){
  //   this.acno=event.target.value
  //   console.log(this.acno);

  // }

  // pwdChange(event:any){
  //   this.pwd=event.target.value
  //   console.log(this.pwd); 

  // }



  login() {
    var acno = this.loginForm.value.acno
    var password = this.loginForm.value.pwd

    if(this.loginForm.valid){
      let result = this.ds.login(acno, password)

    if (result == true) {
      alert("Login Successfull")
      this.router.navigateByUrl('home')
    }

    }
    else{
      alert("invalid Form")
    }

    



  }


}
