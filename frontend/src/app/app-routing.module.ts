import { BhimComponent } from './payment/bhim/bhim.component';
import { CardComponent } from './payment/card/card.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SignupComponent } from './validation/signup/signup.component';
import { LoginComponent } from './validation/login/login.component';
import { CartComponent } from './component/cart/cart.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './component/products/products.component';


const routes: Routes = [
{path:'',redirectTo:'/login', pathMatch: 'full'},
{path:'cart', component:CartComponent},
{path:'products', component:ProductsComponent},
{path:'login', component: LoginComponent},
{path:'signup', component: SignupComponent},
{path:'checkout', component: CheckoutComponent},
{path:'creditcard', component: CardComponent},
{path:'bhim', component:BhimComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { 
}
export const routingComponent = [CartComponent,ProductsComponent,LoginComponent,SignupComponent,CheckoutComponent,CardComponent,BhimComponent]