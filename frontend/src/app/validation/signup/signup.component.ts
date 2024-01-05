import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { confirmPassword } from './confirmPassword.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
valid!: boolean;
minDate = new Date(1920,3,8);
    maxDate = new Date(2003,3,8)  
  constructor(private fb : FormBuilder, private http:HttpClient, private router:Router) { }

  emailRegex = '^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$';
url='http://localhost:8084/signup';
signupForm !: FormGroup;
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      fullname:['',[Validators.required,Validators.minLength(2)]],
      email:['', [Validators.required,Validators.pattern(this.emailRegex)]],
      password:['', [Validators.required,Validators.minLength(5)]],
      confirmpassword:['',Validators.required],
      dob:['',Validators.required]
      },{validator: confirmPassword});
  }
signup(){
  if(this.signupForm.valid){
  this.http.post<any>(this.url,this.signupForm.value).subscribe(res=>{
    this.router.navigate(['login']);
})}
}
get date(){
  return this.signupForm.controls['dob']
}
get fullname(){
  return this.signupForm.controls['fullname'];
}

get email(){
  return this.signupForm.controls['email'];
}
get password(){
  return this.signupForm.controls['password'];
}
get confirmpassword(){
  return this.signupForm.controls['confirmpassword'];
}
}
