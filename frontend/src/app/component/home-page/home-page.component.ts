import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

 public totalItem:number|undefined;
 public searchTerm : string = "";
 constructor(private cartservice:CartService) {
   this.getTotalItem();
  }

  ngOnInit():void{
  const totalItem = sessionStorage.getItem('app.totalItem');
  if(totalItem){
    this.totalItem = parseInt(totalItem);
  }}

  getTotalItem(){
   this.cartservice.productQuantity.subscribe(data=>{this.totalItem=data
   sessionStorage.setItem('app.totalItem', JSON.stringify(data));
  });
  }

  search(event:any){
  this.searchTerm = (event.target as HTMLInputElement).value;
  this.cartservice.search.next(this.searchTerm)
}
}

