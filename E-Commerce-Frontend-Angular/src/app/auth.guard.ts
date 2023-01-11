
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiserviceService } from './apiservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,private service:ApiserviceService) {}
  regiddata:any;
  regid:any;
  canActivate() {
//getting reg-id by service
    let regiddata=this.service.selectedProduct$.subscribe((data)=>(this.regid=data),

    );
if(this.regid){

    return true;
}
else{
  this.router.navigate(['error404'],{skipLocationChange :true})
return false;

}
  }

  }


  

