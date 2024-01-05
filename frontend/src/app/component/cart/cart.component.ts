import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public product : any = []
  public orderdetail:any = [];
  public grandTotal: number = 0;
  constructor(private cartservice: CartService) { }

  ngOnInit(): void {
    this.getProduct();
    const product = sessionStorage.getItem('app.product');
    const order = sessionStorage.getItem('app.order');
    const total = sessionStorage.getItem('app.total');
    if(product && order && total){
     this.product=JSON.parse(product);
     this.orderdetail=JSON.parse(order);
     this.grandTotal=parseInt(total);
    }}
  
    getProduct(){
      this.cartNumberFunc();
      this.cartservice.getProduct().subscribe(res=>{
      this.product = res.cart;
      this.orderdetail=res.order;
      sessionStorage.setItem('app.product', JSON.stringify(this.product));
      sessionStorage.setItem('app.order', JSON.stringify(this.orderdetail));
      sessionStorage.setItem('app.total', JSON.stringify(this.grandTotal));
      this.grandTotal = this.cartservice.getTotalPrice(this.product);
      this.cartservice.TotalAmount.next(this.grandTotal);
    })
  }

 removeItem(item : any, orderdetail:any){
  this.cartservice.getProduct().subscribe(()=>this.cartNumberFunc())
  this.cartservice.removeCartItem(item.id, orderdetail.orderId).subscribe(()=>{this.getProduct()})
  this.cartservice.getProduct().subscribe(()=>this.cartNumberFunc())
  this.getProduct();
  }  
  
   cartNumber:number = 0;
   cartNumberFunc(){
     this.cartservice.getProduct().subscribe(res=>{
     this.cartNumber = res.cart.length;
     this.cartservice.productQuantity.next(this.cartNumber);
    })} 
}