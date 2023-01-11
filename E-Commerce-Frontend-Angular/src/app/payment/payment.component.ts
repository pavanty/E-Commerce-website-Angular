import { ApiserviceService } from 'src/app/apiservice.service';
import { Component, HostListener, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
declare var Razorpay: any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit{

  constructor(private service:ApiserviceService,private toastr: ToastrService) { }
logininfo:any;
email:any;
name:any="";
total:any="oder items(7)"
names:any=""
phonenumber:any;
gettotalvaluesinservice:any;

@Input() gettaotalvaluecount:any
@Output() eventclick=new EventEmitter()



  ngOnInit(): void {
    this.service.selectdelogin.subscribe((data)=>{this.logininfo=data,
      this.email = this.logininfo.email,
    this.names=this.logininfo.name ,
    this.phonenumber=this.logininfo.phonenumber,
    this.name=this.logininfo.name+ "(Total items " +this.gettaotalvaluecount+")";
  });
    // console.log("logininfoinpayment ",typeof(this.logininfo))
    // console.log("logininfoinpayment ",this.logininfo)
    // console.log("totalvaluecount ",this.gettaotalvaluecount)
    
    
    // console.log("payment info name is " +this.name+ "email is"+this.email)
    

  
  

    this.service.selectedcost.subscribe((data)=>(
this.gettotalvaluesinservice=data*100


    ));
    console.log("gttotalinitems are in payment",this.gettotalvaluesinservice)
  }

  
  message:any = "";
  paymentId = "";
  error = "";
  title = 'ecommerce payment';
  options = {
    "key": "rzp_test_uMGNMRMi4DtsA2",
    "amount": "",
    "name":this.name,
    // "description": "Web Development",
    "image": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",
    
    "handler": function (response: any) {
      var event = new CustomEvent("payment.success",
        {
          detail: response,
          bubbles: true,
          cancelable: true
        }
      );
      window.dispatchEvent(event);
    },
    "prefill": {
      "name": "",
      "email": "",
      "contact": "",
      
    },

  };

  paynow() {
    this.paymentId = '';
    this.error = '';
    this.options.amount = this.gettotalvaluesinservice; 
    this.options.name = this.name;
    this.options.prefill.email = this.email;
    
    this.options.prefill.contact = this.phonenumber;
 
    var rzp1 = new Razorpay(this.options);
    rzp1.open();
    rzp1.on('payment.failed', function (response: any) {
 
 
      console.log(response.error.reason);
  
    
    }
    );
  }

  @HostListener('window:payment.success', ['$event'])
  onPaymentSuccess(event: any): void {

    this.message = "Payment_Successfull";
   
   
    this.eventclick.emit(this.message)
    
  }

}
