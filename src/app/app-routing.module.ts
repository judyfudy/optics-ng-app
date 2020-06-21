import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductTypeComponent} from "./component/productType/productType.component";
import {SignInComponent} from "./component/authentication/sign-in/sign-in.component";
import {ProductComponent} from "./component/product/product.component";
import {SignUpComponent} from "./component/authentication/sign-up/sign-up.component";
import {CartComponent} from "./component/cart/cart.component";
import {WorkerComponent} from "./component/worker/worker.component";
import {UserComponent} from "./component/user/user.component";
import {HomeComponent} from "./component/home/home.component";
import {AdminPageComponent} from "./component/admin-page/admin-page.component";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'productType', component: ProductTypeComponent},
  {path: 'productType/:id', component: ProductComponent},
  {path: 'authenticate', component: SignInComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'cart', component: CartComponent},
  {path: 'worker', component: WorkerComponent},
  {path: 'admin', component: AdminPageComponent},
  {path: 'profile', component: UserComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
