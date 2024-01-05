import { CartService } from './../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Sign } from '../component/cart/cart.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  providers: [],
})
export class CheckoutComponent implements OnInit {
  
  public grandTotal:number=0;
  sign:Sign =new Sign();
  public product:any = [];
  public orderdetail:any = [];
  nextvalid : boolean= true;
  formvalid : boolean= false;
  public signupobj : any ;

  constructor(private fb : FormBuilder, private cartservice:CartService, private http:HttpClient, private router:Router){}
  checkoutForm : any = FormGroup;

  ngOnInit(): void {
    this.cartservice.signupobj.subscribe(res=>{
      this.signupobj = res;})
     //this.signupobj = JSON.parse(sessionStorage.getItem('signupobj'));
     if(this.signupobj.delivery==null){ 
      this.checkoutForm = this.fb.group({
      phone:['',[Validators.required,Validators.maxLength(10),Validators.pattern("[1-9]|[1-9][0-9]|[1-9][0-9][0-9]"),Validators.minLength(10)]],
      pincode:['', [Validators.required,Validators.minLength(6),Validators.pattern("[1-9]|[1-9][0-9]|[1-9][0-9][0-9]")]],
      state:['', Validators.required],
      city:['', Validators.required],
      area:['', Validators.required],
      addressType:['', Validators.required]
    });
  }

    else{
      this.checkoutForm = this.fb.group({
        phone:[this.signupobj.delivery.phone,[Validators.required,Validators.maxLength(10),Validators.pattern("[1-9]|[1-9][0-9]|[1-9][0-9][0-9]"),Validators.minLength(10)]],
        pincode:[this.signupobj.delivery.pincode, [Validators.required,Validators.minLength(6),Validators.pattern("[1-9]|[1-9][0-9]|[1-9][0-9][0-9]")]],
        state:[this.signupobj.delivery.state, Validators.required],
        city:[this.signupobj.delivery.city, Validators.required],
        area:[this.signupobj.delivery.area, Validators.required],
        addressType:[this.signupobj.delivery.addressType, Validators.required]
      });
    }
    this.getProduct();
  }
   getProduct(){
      this.cartservice.getProduct().subscribe(res=>{
       this.product = res.cart;
       this.orderdetail=res.order;
       this.grandTotal = this.cartservice.getTotalPrice(this.product);
      })
    }

  address(){
    if(this.checkoutForm.valid){
     this.nextvalid = false;
     this.formvalid = true;
     this.sign.email=this.signupobj.email;
     this.cartservice.phonenumber.next(this.checkoutForm.value.phone);

      if(this.signupobj.delivery==null){
        this.cartservice.postDelivery(this.checkoutForm.value).subscribe(res=>{console.log(res)})
        this.cartservice.putDelivery(this.sign).subscribe(res=>{console.log(res)})}
      else{
        this.cartservice.updateDelivery(this.checkoutForm.value).subscribe(res=>{console.log(res)})
        this.cartservice.putDelivery(this.sign).subscribe(res=>{console.log(res)})}
  }}
card(){
  this.router.navigate(['creditcard']);
}
bhim(){
  this.router.navigate(['bhim']);
}
  get phone(){
    return this.checkoutForm.controls['phone']
  }
  get city(){
    return this.checkoutForm.controls['city']
  }
  get pincode(){
    return this.checkoutForm.controls['pincode']
  }
  get area(){
    return this.checkoutForm.controls['area']
  }
get addresstype(){
  return this.checkoutForm.controls['addressType']
}
get state(){
  return this.checkoutForm.controls['state']
}
}