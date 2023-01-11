import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';
import {} from '@fortawesome/free-brands-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  regid: any;
  cartdetails: any;
  getdatabyid: any;
  message: any;
  orderresponse: any;
  gettotal: number = 0;
  productlength: number = 0;
  faTrash = faTrash;
  sendorder: any;
  date:any=new Date();
  constructor(
    private router: Router,
    private service: ApiserviceService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.service.selectedProduct$.subscribe((data) => (this.regid = data));

    this.service.getallcartitems().subscribe((data) => {
      this.cartdetails = data;
      this.getdatabyid = data;
      this.sendorder = data;
      this.filterproducts();
      this.sendcost();
    });

    console.log('dashboard details', this.cartdetails);
  }

  handleclickevent(data) {
    console.log('output coming from payment');
    if (data == 'Payment_Successfull') {
   
      this.toastr.success(
        'PAYMENT SUCCESSFULL',
        'E-Commerce Payemnt Confirmation @Razor Pay',
        {
          timeOut: 4000,
          positionClass: 'toast-center-center',
        }
      );

      this.additemsorder();
      setTimeout(() => {
        this.deletecartall();
      }, 2000);
    }
  }
  additemsorder() {
    this.getdatabyid  = this.cartdetails.filter((a: any) => {
      if (a.register.reg_id == this.regid) {
        Object.assign(a,{reg_id:this.regid,orderdate:this.date})
        console.log('value in filterproducted total', this.gettotal);
        return (this.service.postorder(a).subscribe((data) => {
          this.orderresponse = data;
        }));
      }
    });
    // this.ngOnInit();
  }

  sendcost() {
    this.service.setcost(this.gettotal);
  }
  gotoproductpage() {
    this.router.navigate(['/product'], { skipLocationChange: true });
  }

  filterproducts() {
    this.getdatabyid = this.cartdetails.filter((a: any) => {
      if (a.register.reg_id == this.regid) {
        this.gettotal += parseInt(a.price);
        console.log('value in filterproducted total', this.gettotal);
        console.log("filter value",a);
        return a;
      }
    });
  }
  deletecartall() {
    this.getdatabyid = this.cartdetails.filter((a: any) => {
      if (a.register.reg_id == this.regid) {
        this.service.deletecartbyid(a.id).subscribe((data) => {
          this.gettotal = 0;
          this.message = data;
          this.ngOnInit();
        });
      }
    });
  }

  deletecartbyid(id: any) {
    this.service.deletecartbyid(id).subscribe((data) => {
      this.gettotal = 0;
      this.message = data;
      this.toastr.error('item deleted');
      this.ngOnInit();
    });
  }

  paymentpage() {
    this.router.navigate(['payment'], { skipLocationChange: true });
  }
}
