import { OrderitemsComponent } from './orderitems/orderitems.component';

import { CommentComponent } from './comment/comment.component';
import { EditprofileComponent } from './editprofile/editprofile.component';

import { GoogleprofileviewComponent } from './googleprofileview/googleprofileview.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';

import { SinginComponent } from './singin/singin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { Error404Component } from './error404/error404.component';
import { DeactivateGuard, DeactivateGuardsignin } from './deactivate.guard';
import { ProductsComponent } from './productview/products/products.component';
import { PaymentComponent } from './payment/payment.component';
// import { ProductsComponent } from './productview/products/products.component';

const routes: Routes = [

{path:"",redirectTo:'/E-commerce',pathMatch:'full'},

  { path:"E-commerce",component: HomepageComponent},
  { path: 'register', component: SinginComponent,canDeactivate:[DeactivateGuardsignin]  },
  // { path: 'product', component: ProductsComponent },
  { path: 'product',component: ProductsComponent,loadChildren:()=>import('./productview/productview.module').then((x)=>x.ProductviewModule),},
  { path: 'product/:id', component: ProductdetailsComponent,
children:[
  {path:'comment',component:CommentComponent}
]

},
  { path: 'login', component: LoginComponent,canDeactivate:[DeactivateGuard]},
  {path:'addtocart',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'viewregistration/:id', component:ViewprofileComponent},
  {path:'viewgoogleprofile', component:GoogleprofileviewComponent},
{path:"orderitems",component:OrderitemsComponent,canActivate:[AuthGuard]},
  {path:"editprofile",component:EditprofileComponent,canActivate:[AuthGuard]},
 {path:'payment',component:PaymentComponent},
  {path:"error404",component:Error404Component},
  {path:"**",component:Error404Component}
  // {path:"**",component:PagenotfoundComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [
  SinginComponent,
  LoginComponent,
  ProductdetailsComponent,
  // ProductsComponent,
  NavigationComponent,
  HomepageComponent,
  ViewprofileComponent,
  DashboardComponent,
  OrderitemsComponent,
  EditprofileComponent,
  GoogleprofileviewComponent,
  CommentComponent,
  PaymentComponent,
  Error404Component,

];
