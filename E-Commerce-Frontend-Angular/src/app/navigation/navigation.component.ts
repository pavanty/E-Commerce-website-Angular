import { ApiserviceService } from './../apiservice.service';
import { Router } from '@angular/router';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { faYoutube,faProductHunt } from '@fortawesome/free-brands-svg-icons';
import { faCartPlus,faUser,faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit,OnDestroy {
  constructor(private router: Router,private service:ApiserviceService) {}


regid:number; 
userdata:any;
stringvalue:string="abc"
faCartPlus=faCartPlus;
faUser =faUser;
faShoppingBag=faShoppingBag;
faProductHunt=faProductHunt;

//on logout
onclick(){

  window.location.reload();
  this.router.navigate([""])

}

showvalue(regid:any){
this.regid=this.regid;

console.log("reg id",this.regid)
}

ngOnDestroy(){
//   this.loginSubscription= this.service.selectedProduct$.unsubscribe();
this.onclick()
}

ngOnInit() {
//getting the registration id by service 
this.service.selectedProduct$.subscribe((data)=>(this.regid=data),

);
//getting the google information data
this.service.selectedProductgoogle$.subscribe((googledata)=>(
  this.userdata=googledata),
)
console.log("nav is ",this.regid)



}



  gotoproductpage() {
    this.router.navigate(['product']);
  }



}
