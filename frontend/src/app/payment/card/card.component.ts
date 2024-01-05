import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  TotalAmount:any;
  public validate:boolean | undefined;
  public cardForm!: FormGroup
  url='http://localhost:8084/card';
  constructor(private fb : FormBuilder, private cartservice: CartService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.cardForm = this.fb.group({
      name:['', Validators.required],
      cvv:['', [Validators.required,Validators.pattern("[1-9]|[1-9][0-9]|[1-9][0-9][0-9]")]],
      cardnumber:['',[Validators.required,Validators.pattern("[1-9]|[1-9][0-9]|[1-9][0-9][0-9]"),Validators.maxLength(16),Validators.minLength(16)]],
      expiration:['',[Validators.required,Validators.pattern(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/)]]
    });
    //this.cartservice.TotalAmount.subscribe(res=>{this.TotalAmount=res})
    this.TotalAmount=sessionStorage.getItem('app.total');
  }
  login(){
    this.http.get<any>(this.url).subscribe(res=>{
        const user = res.find((a:any)=>{
         return  a.cvv == this.cardForm.value.cvv 
        });
        if(user){
          this.cardForm.reset();
          this.router.navigate(['products'])
        }
        else{
       this.validate = true;
        }
      })
  }

get cvv(){
  return this.cardForm.controls['cvv'];
}
get name(){
  return this.cardForm.controls['name'];
}get expiration(){
  return this.cardForm.controls['expiration'];
}get cardnumber(){
  return this.cardForm.controls['cardnumber'];
}
}
