
import { ApiserviceService } from './../apiservice.service';
import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit,OnChanges {
// comment:Comment=new Comment("")
  comments: FormGroup;
  commentsend:string;
  data:any;
  session:any;
 commentmain:FormGroup;
 name:any
 message:any;
 regid:any;
 filtercommentbycategory:any;
 getallcomments:any;

  rating:any;
  sendrating:any;
  constructor(private service:ApiserviceService) { }
  @Input() productids:any;
@Output() eventclick=new EventEmitter()

ngOnChanges(){
  console.log("product id is ngonchages is ",this.productids)

  this.service.selectedProduct$.subscribe((data)=>(this.regid=data,
    console.log("regid details on comment",this.regid)
    ),

  );
console.log("reg id in comment in ngchanges is",+this.regid)
}

  ngOnInit(): void {

    //for taking name
this.service.selectedname.subscribe((values)=>{
  this.name=values;
  console.log("name is in comment",values)
})
console.log("getallcommentsdata",this.getallcomments);



this.service.getallcomments().subscribe((data)=>{
  this.getallcomments=data;
  this.filtercommentbycategory = data;
  this. filtercomments();
  });

    // console.log("comment in product id ",typeof(this.productids))
    // console.log("ngonit value",this.sendrating)
    this.formControls();


  }

  formControls(){
    this.commentmain=new FormGroup({
      rating:new FormControl(this.rating),
      productid:new FormControl(this.productids),
      name:new FormControl(this.name),
      comment:new FormControl()
      
      
      });

   
  }

  filtercomments(){
this.filtercommentbycategory=this.getallcomments.filter((a:any)=>{

    if(a.productid===this.productids ){

      return a
    }
  });
this.sendoutput();

  }

  sendoutput(){
    this.eventclick.emit(this.filtercommentbycategory);
  }

  submitform(){
    console.log("submit form value",this.commentmain.value)
this.service.postcomment(this.commentmain.value).subscribe(
 (data)=>{
  this.message=data;

  // this.sendrating=this.value;
  this.ngOnInit();
  // this.value=0
 } ,
)

}

 


  addcomment(commentvalue:any){
    console.log("comment is ",commentvalue)

    this.commentsend=commentvalue;

      }


}
