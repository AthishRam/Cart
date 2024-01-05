import { CartService } from './../../service/cart.service';
import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { Order, Address, OrderDetail} from '../cart/cart.model';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit { 

  public signinobj:any;
  compareQuantity:any;
  address:Address= new Address();
  order:Order = new Order();
  orderdetail:OrderDetail = new OrderDetail();
  public product:any = [];
  searchKey:string="";
  public noStock:boolean|undefined;
  public filterCategory:any;

constructor(private api: ApiService, private cartservice: CartService){ }

   ngOnInit():void {
    this.api.getProduct().subscribe(res =>{ this.product = res;
      this.filterCategory=res;
      this.product.forEach((a:any) => {
        Object.assign(a,{quantity:1});
     });
     });
     this.cartservice.search.subscribe((val:any)=>{
       this.searchKey = val;
     })
   }

   inc(cart:any){
    this.compareQuantity = cart.stock    
    if(cart.quantity<=this.compareQuantity)
      cart.quantity += 1 
   }
    dec(cart:any){
      this.compareQuantity = cart.stock    
      if(cart.quantity>1)
        cart.quantity -= 1    
      }

addtocart(cart:any){ 
if(cart.quantity<=cart.stock){
this.order.id=cart.id
this.orderdetail.quantity=cart.quantity;
this.orderdetail.orderId=uuidv4().substring(0, 8);
this.cartservice.getProduct().subscribe(()=>this.cartNumberFunc())
this.cartservice.orderDetail(this.orderdetail).subscribe(res=>console.log(res))
this.cartservice.addtocart(this.order, this.orderdetail.orderId).subscribe(res=>console.log(res))}
this.cartservice.getProduct().subscribe(()=>this.cartNumberFunc())
}

cartNumber:number = 0;
cartNumberFunc(){
 this.cartservice.getProduct().subscribe(res=>{
     this.cartNumber = res.order.length;
     this.cartservice.productQuantity.next(this.cartNumber);
 })
}

filter(category:string){
this.filterCategory = this.product.filter((a:any)=>{
  if(a.category== category || category==''){
    return a;
  }
})
}}
