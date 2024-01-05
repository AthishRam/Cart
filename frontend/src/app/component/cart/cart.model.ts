export class Order{
   id:String|undefined;
  }  
export class Sign{
  email:String|undefined
}

export class OrderDetail{
orderId:String|undefined
quantity:number|undefined
}

export class Address{
    phone:any;
    pincode:number|undefined;
    state:number|undefined;
    city:String|undefined;
    area:String|undefined;
    addressType:String|undefined;
}