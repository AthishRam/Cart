import { Injectable } from '@angular/core';
import { BehaviorSubject,Subject} from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public TotalAmount = new BehaviorSubject<number>(0)
  public phonenumber = new BehaviorSubject<number>(0);
  public phone:number=0;
  public emailid:String=''
  public email = new BehaviorSubject<any>('');
  public productQuantity = new Subject<number>();
  public search = new BehaviorSubject<string>("");
  public signupobj = new BehaviorSubject<any>('');

constructor(private http: HttpClient) { }

getProduct(){
this.email.subscribe(res=>{this.emailid=res}) 
 return this.http.get<any>("http://localhost:8084/signup/"+this.emailid);
  }

postDelivery(address:any){
this.phonenumber.subscribe(res=>{this.phone=res})
const url='http://localhost:8084/delivery'
return this.http.post<any>(url, address)
} 

putDelivery(address:any){
  this.phonenumber.subscribe(res=>{this.phone=res})
  const url='http://localhost:8084/signup/'+this.emailid+'/delivery/'+this.phone;
  return this.http.put<any>(url, address)  
}

updateDelivery(delivery:any){
  const url='http://localhost:8084/delivery'
  return this.http.put<any>(url, delivery)
}

addtocart(product:any, orderId:any){
return this.http.put("http://localhost:8084/signup/"+this.emailid+"/cart/"+product.id+"/orderid/"+orderId, product);
} 

getTotalPrice(total: any): number {
  
  let orderdetailString = sessionStorage.getItem('app.order');
  
  if (!orderdetailString) {
    throw new Error('Order details not found in sessionStorage');
  }
  let order = JSON.parse(orderdetailString);

  if (!Array.isArray(order)) {
    throw new Error('Order details in sessionStorage is not an array');
  }
  let grandTotal = 0;

  total.forEach((a: any, i: number) => {
    if (i < order.length) {
      grandTotal += a.price * order[i].quantity;
    } else {
      throw new Error('Mismatch in the length of total and order arrays');
    }
  });
  return grandTotal;
}

removeCartItem(product : number, orderId:any){
return this.http.delete("http://localhost:8084/signup/"+this.emailid+"/cart/"+product+"/orderid/"+orderId);
}

orderDetail(order:any){
return this.http.post("http://localhost:8084/order", order);
}
getOrder(){
return this.http.get<any>("http://localhost:8084/order");
}}