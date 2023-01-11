import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }
  
//pass reg-id
  private product$ = new BehaviorSubject<any>(null!);
  selectedProduct$ = this.product$.asObservable();
  setProduct(product: any) {
    this.product$.next(product);
    }

    //this is for passing name
    private name=new BehaviorSubject<any>(null!);
    selectedname=this.name.asObservable();

setname(name:any){
  this.name.next(name)
}
//pass login jsondata
private sendlogin=new BehaviorSubject<any>([]);
selectdelogin=this.sendlogin.asObservable();
setlogin(login:any){
  this.sendlogin.next(login);
}
//pass totalcostindashboard


private sendtotalcost=new BehaviorSubject<any>(null!);
selectedcost=this.sendtotalcost.asObservable();

setcost(cost:any){
  this.sendtotalcost.next(cost)
}

    //this is for google data 

    private productgoogle$ = new BehaviorSubject<any>(null!);
  selectedProductgoogle$ = this.productgoogle$.asObservable();
  setProductgoogle(productgoogle: any) {
    this.productgoogle$.next(productgoogle);
  }

public doregistration(register:any):Observable<any>{
  return this.http.post<any>("http://localhost:8087/user/register",register,{responseType:'text' as 'json'})
}

public dologin(login:any):Observable<any>{
  return this.http.post<any>("http://localhost:8087/user/login",login,{responseType:'text' as 'json'})
}
public getproducts():Observable<any>{
  return this.http.get<any>("http://localhost:3000/products")
}
public getproductdetailbyid(id:any):Observable<any>{
  return this.http.get<any>(`http://localhost:3000/products/`+id)
}

public getregistrerbyid(idregister:any):Observable<any>{
  return this.http.get<any>(`http://localhost:8087/user/getbyid/`+idregister)
}

public updationregistrationformbyid(id:any):Observable<any>{
  return this.http.put('http://localhost:8087/user/updatebyid/',+id)
}

public addtocart(regid:any,product:any):Observable<any>{
  return this.http.post<any>("http://localhost:8087/cart/register/"+regid,product,{responseType:'text' as 'json'})
}
public deletecartbyid(id:any){
  return this.http.delete (`http://localhost:8087/cart/deletebyid/`+id,{responseType:'text' as 'json'});
}

public getallcartitems():Observable<any>{
  return this.http.get<any>("http://localhost:8087/cart/showallcart")
}
public editprofilebyid(id:any,profiledetails:any):Observable<any>{
  return this.http.put<any>(`http://localhost:8087/user/updatebyid/`+id,profiledetails,{responseType:'text' as 'json'})
}
// http://localhost:8087/comment/savecomments
 public postcomment(comment:any):Observable<any>{
  return this.http.post<any>("http://localhost:8087/comment/savecomments/",comment,{responseType:'text' as 'json'});
 }
 public getallcomments():Observable<any>{
  return this.http.get<any>("http://localhost:8087/comment/getcomments")
}
public postorder(productorders:any):Observable<any>{
  return this.http.post<any>("http://localhost:8087/orderitems/orderitems/",productorders,{responseType:'text' as 'json'});
 }

 public getorder():Observable<any>{
  return this.http.get<any>("http://localhost:8087/orderitems/orderitems")
 }
}