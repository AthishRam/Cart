import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-bhim',
  templateUrl: './bhim.component.html',
  styleUrls: ['./bhim.component.css']
})
export class BhimComponent implements OnInit {
validate!:boolean;

  public TotalAmount:any;
  url='http://localhost:8084/upi';
  public upiForm!: FormGroup;
  constructor(private fb : FormBuilder, private cartservice: CartService, private http: HttpClient, private router: Router) { }
  
  ngOnInit():void {
    this.upiForm = this.fb.group({
      id:['', [Validators.required,Validators.pattern("[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}")]],
      password:['',[ Validators.required,Validators.minLength(6),Validators.maxLength(6),Validators.pattern("^[0-9]+$")]]
    });
    //this.cartservice.TotalAmount.subscribe(res=>{this.TotalAmount=res})
    this.TotalAmount=sessionStorage.getItem('app.total');
  }
  login(){
    this.http.get<any>(this.url).subscribe(res=>{
        const user = res.find((a:any)=>{
         return  a.upi_id === this.upiForm.value.id && a.password == this.upiForm.value.password; 
        });
        if(user){
          this.upiForm.reset();
          this.router.navigate(['login'])
        }
        else{
       this.validate = true;
        }
      })
  }  
  
  get id(){
    return this.upiForm.controls['id']; 
  }
  get password(){
    return this.upiForm.controls['password']; 
  }
}

