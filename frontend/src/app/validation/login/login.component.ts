import { CartService } from './../../service/cart.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public sign:any;
public signupobj:any; 
public valid:boolean | undefined;
public emailvalid:boolean | undefined;
url='http://localhost:8084/signup';

  public loginForm!: FormGroup
  constructor(private fb : FormBuilder, private http: HttpClient, private cartservice: CartService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required]
    });
  }
 
login(){
this.http.get<any>(this.url).subscribe(res=>{
    const user = res.find((a:any)=>{
      this.signupobj = a;
     return a.email === this.loginForm.value.email && a.password ===this.loginForm.value.password 
});
    if(user){
      this.cartservice.email.next(this.signupobj.email);
      this.cartservice.signupobj.next(this.signupobj);
      //sessionStorage.setItem("signupobj", this.signupobj)
      const cartitem=this.signupobj.order.length;
      this.cartservice.productQuantity.next(cartitem);
      this.loginForm.reset();
      this.router.navigate(['products'])
    }
    else{
   this.valid = true;
    }
  })}

get email(){
  return this.loginForm.controls['email'];
}
get password(){
  return this.loginForm.controls['password'];
}
 }
