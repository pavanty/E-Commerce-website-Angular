import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faList, faSearch } from '@fortawesome/free-solid-svg-icons';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  faSearch = faSearch;
  faYoutube = faYoutube;
  faList = faList;
  productdetails: any;
  public errormessage;
  searchname: string = '';
  grandtotal = 0;
  column: boolean = true;
  filterproductsbycategory: any;


  //sidebar colum open close
  showsidebar() {
    this.column = !this.column;
  }

  constructor(private service: ApiserviceService, private router: Router) { }

  //getting the total price
  gettotal() {
    this.productdetails.map((a: any) => {
      this.grandtotal += a.price;
    });
  }
  //on selecting the product go to product details page by passing id
  onSelect(product: any) {
    this.router.navigate(['/product', product.id], {
      skipLocationChange: true,
    });
  }

  totallength: any;
  page: number = 1;
  searchnam: any;
  regid: any;
  message: any;

  ngOnInit(): void {
    //getting the data hrough service
    this.service.selectedProduct$.subscribe((data) => {
      this.regid = data;
    });
    console.log('product component reg_id', this.regid);

    //get all products data through api call
    this.service.getproducts().subscribe((data) => {
      this.filterproductsbycategory = data;
      this.productdetails = data;

      this.totallength = data.length;
      //if u want to assign any extra value u can do it
      this.productdetails.forEach((a: any) => {
        Object.assign(a, { quantity: 1, rate: a.rating.rate, count: a.rating.count });
        this.gettotal();
      });
      console.log('cart items are ', this.productdetails);
      console.log('length are', this.totallength);
    });
  }
  //filter the products by the required category
  filterproducts(category: string) {
    this.filterproductsbycategory = this.productdetails.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    });
  }
  //after clicking the items it will go to backend of the application
  addtocartbackend(product: any) {
    this.service.addtocart(this.regid, product)
      .subscribe((data) => {
        this.message = data;
        this.ngOnInit();

      },

        (error: HttpErrorResponse) => {
          console.log(error);
        });

    console.log('product value is ', typeof product);
  }
}

