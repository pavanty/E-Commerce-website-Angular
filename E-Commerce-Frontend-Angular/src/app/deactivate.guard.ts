import { Injectable, Component } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { SinginComponent } from './singin/singin.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<LoginComponent> {
  canDeactivate(Component :LoginComponent){
    if(Component.login.dirty){
return window.confirm("you have some unsaved changes ,Do you want to navigate to other screen")

    }
    return true;
  
  }
  
  
}
export class DeactivateGuardsignin implements CanDeactivate<SinginComponent> {
  canDeactivate(Component :SinginComponent){
    if(Component.register.dirty){
return window.confirm("you have some unsaved changes ,Do you want to navigate to other screen")

    }
    return true;
  
  }
  
  
}