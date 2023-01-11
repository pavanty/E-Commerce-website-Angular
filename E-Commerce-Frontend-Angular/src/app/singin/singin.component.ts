import { ApiserviceService } from './../apiservice.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss'],
})
export class SinginComponent implements OnInit {
  register: FormGroup;
  message: any;
  value: true;
  id: number;

  strIntoObj: any;

  constructor(private service: ApiserviceService, private router: Router) {}
  occupations: any = ['Employee', 'Student', 'Others'];
  default: 'Select Occupation';

  // senddata() {
  //   this.service.setProduct(this.id);
  // }

  ngOnInit() {
    this.register = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      occupation: new FormControl(null, Validators.required),
      areaofinterest: new FormControl(null, Validators.required),
      file: new FormControl(null, Validators.required),
      checkbox: new FormControl(null, Validators.required),
    phonenumber: new FormControl(null, Validators.min(10)),
      skills: new FormArray([new FormControl(null, Validators.required)]),
    });
  }
  onclickdelete(i: number) {
    console.log(i);

    const control = <FormArray>this.register.controls['skills'];
    control.removeAt(i);
  }

  onaddskills() {
    (<FormArray>this.register.get('skills')).push(
      new FormControl(null, Validators.required)
    );
  }

  onclick() {
    console.log('hello pavana ');
    setTimeout(() => {
      this.router.navigate(['/login'], { skipLocationChange: true });
    }, 2000);
  }
  public submitform() {
    if (this.register.valid) {
    this.service.doregistration(this.register.value).subscribe(
      (data) => {
        this.message = data;

        console.log("signin ",typeof(this.register));
        console.log("signin value ",this.register.value);

        this.strIntoObj = JSON.parse(this.message);
        this.id = this.strIntoObj.reg_id;
        console.log(typeof this.id);
        console.log(this.id);
        // this.senddata();
        this.onclick();
        this.register.reset();
     
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        this.register.reset();
        this.ngOnInit();
      }
    );
    }

    else{

      this.validateAllFormFields(this.register);
    }
  }
  
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




  get description() {
    return this.register.get('description');
  }
  get date() {
    return this.register.get('date');
  }
  get gender() {
    return this.register.get('gender');
  }
  get name() {
    return this.register.get('name');
  }
  get email() {
    return this.register.get('email');
  }
  get password() {
    return this.register.get('password');
  }
  get areaofinterest() {
    return this.register.get('areaofinterest');
  }
  // get educationdegree() {
  //   return this.register.get('educationdegree');
  // }
  // get education12() {
  //   return this.register.get('education12');
  // }

  // get educationtenth() {
  //   return this.register.get('educationtenth');
  // }
 get phonenumber() {
   return this.register.get('phonenumber');
 }
  get file() {
    return this.register.get('file');
  }

  get skills() {
    return this.register.get('skills');
  }

  get checkbox(){
    return this.register.get('checkbox')
  }


  onreset(){
    this.register.reset();
  }
  

}
