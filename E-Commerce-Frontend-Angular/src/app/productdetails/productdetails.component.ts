
// import { getdates } from './../state/date.selector';
import { ApiserviceService } from './../apiservice.service';
import { AfterViewInit, Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { DateState } from '../state/date.state';
import { dates } from '../state/date.actions';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss'],
})
export class ProductdetailsComponent implements OnInit,AfterViewInit{
  // dateset$ :Observable<any>
  regid:any;
  commentvalues:any;
  id: any;
seco=new Date().getSeconds()
  productid:any;
  session:any;
  filtercommentbycategory:any;
dates:any;
  productdetail: any;
  constructor(
    private service: ApiserviceService,
    private activatedRoute: ActivatedRoute,
  private router:Router,
  private store:Store<{dates:{dates:any}}>
  // private store:Store<{dates:DateState}>
 
  ) {

  }


  // @ViewChild("commentcolor")marker:ElementRef;
  // ngAfterViewInit(){
  //   console.log("marker value is",this.marker)
  //   this.marker.nativeElement.style.color="blue";
  // }


  @ViewChildren("commentcolor")marker:QueryList<any>;
  ngAfterViewInit(){
    console.log("marker value is",this.marker)
    this.marker.first.nativeElement.style.color="orange";
      this.marker.last.nativeElement.style.color="green";
  }





  ngOnInit(){
    this.store.dispatch(dates());

    this.store.select('dates').subscribe((data)=>{

      this.dates=data.dates;
      console.log("date is ngonit",this.dates)
    })
    // this.store.select('dates').subscribe(data=>{

    //   this.date=data.dates;
    //   console.log("date is ngonit",this.date)
    // })
    // this.dateset$=this.store.select(getdates);
// console.log("date is ngonit",this.dateset$)
//getting regid
    this.service.selectedProduct$.subscribe((data)=>(this.regid=data),

    );


//getting the id that we have clicked through paramenters
    this.activatedRoute.paramMap.subscribe((params :ParamMap)=> {
    this.id=parseInt(params.get('id'));
    });
    this.getbyid();
    
  }
//after geeting the id pass the id to get the details of the items
  getbyid() {
    this.service.getproductdetailbyid(this.id).subscribe((data) => {
      this.productdetail = data;
      this.productid=data.id;
      console.log("id in productdetail is",this.productid);
    });
  }
//go to product page
  gobackpage(){
      this.router.navigate(['product'],{skipLocationChange :true})
  }

  getdesiredfilter(data:any){
    this.filtercommentbycategory=data;
    console.log("data filter is ",this.filtercommentbycategory)
    
  }




}
