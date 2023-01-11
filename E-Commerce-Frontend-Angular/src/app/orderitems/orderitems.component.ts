import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderitems',
  templateUrl: './orderitems.component.html',
  styleUrls: ['./orderitems.component.scss']
})
export class OrderitemsComponent implements OnInit {
  orderitems:any;
  orderitemsfilter:any;
  regid:any;
  date:any=new Date();
  constructor(private service:ApiserviceService,private router:Router) { }






  ngOnInit(): void {

    this.service.selectedProduct$.subscribe((data)=>(
      this.regid=data
    ));

    this.service.getorder().subscribe((data)=>{
      this.orderitems=data;
      this.orderitemsfilter=data;
      this.getfilterorders();
    })
  
    console.log(typeof(this.date))
  }

  getfilterorders(){
    this.orderitemsfilter=this.orderitems.filter((a:any)=>{
      if(a.reg_id==this.regid){
        return a;
      }
    })
  }
  gotoproductpage(){

    this.router.navigate(['/product'])
  }



}
