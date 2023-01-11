import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnChanges, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';
import { SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{
  login: FormGroup;
  message: any;
  messagesuccessfull: any;
  errorstatus: any;
  displayvalue: any;
  user: any;
  loggedIn: any;
  strIntoObj: any;
  id: any;
name:any;
  constructor(
    private authService: SocialAuthService,
    private service: ApiserviceService,
    private router: Router
  ) {}

  senddata() {
    this.service.setProduct(this.id);
  }

  //sendname

  sendname(){
    this.service.setname(this.name);
  }

sendlogindata(){
  this.service.setlogin(this.strIntoObj)
}
  senddatagoogle() {
    this.service.setProductgoogle(this.user);
  }
  onclicks() {
    console.log(this.id);
    if (this.message != Number) {
     
      console.log('value of user', this.user);
      setTimeout(() => {
        this.router.navigate(['/product'], { skipLocationChange: true });
      }, 2000);
    }
  }
//after submiiting the form
  public submitform() {
    if (this.login.valid) {
    this.service.dologin(this.login.value).subscribe(
      (data) => {
        this.message = data;
        this.messagesuccessfull="Login Successfull"
        this.strIntoObj = JSON.parse(this.message);
        this.id = this.strIntoObj.reg_id;
        this.name=this.strIntoObj.name;
        console.log("name is",this.name)
        this.senddata();
        this.sendname();
        this.sendlogindata();
        this.onclicks();
        this.login.reset();
      },
      (error: HttpErrorResponse) => {
        this.errorstatus = error.status;
        this.messagesuccessfull="Login Failed"
        console.log(error.status);
        this.login.reset();
        this.senddata();
        this.ngOnInit();
      }
    );
  }
  else{
    this.validateAllFormFields(this.login);
  }
}

  ngOnInit() {
    //google data
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user.firstName != null;
      console.log('user value is ', this.user.firstName);
      console.log('logged in', this.loggedIn);
      if (this.loggedIn) {
        this.senddatagoogle();
        this.messagesuccessfull="Login successfull"
        setTimeout(() => {
          this.router.navigate(['/product'], { skipLocationChange: true });
        }, 2000);
        this.loggedIn != this.loggedIn;
      }
    });
//login formgroup
    this.login = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }

  //validate the forms
  validateAllFormFields(formGroup: FormGroup) {

    Object.keys(formGroup.controls).forEach(field => {
  
     
  
      const control = formGroup.get(field);
  
      if (control instanceof FormControl) {
  
        control.markAsTouched({ onlySelf: true });
  
      } else if (control instanceof FormGroup) {
  
        this.validateAllFormFields(control);
  
      }
  
    });
  
  }
  get email() {
    return this.login.get('email');
  }
  get password() {
    return this.login.get('password');
  }
}
