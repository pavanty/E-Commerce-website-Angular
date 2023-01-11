import { ApiserviceService } from './../apiservice.service';
import { ActivatedRoute,ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.scss']
})
export class ViewprofileComponent implements OnInit {
id:any
regdetails:any

url=""

  constructor(private activatedRoute:ActivatedRoute,private service:ApiserviceService,private router:Router) { }
//call method with registration id to get the id
getbyregistrationid(){
  this.service.getregistrerbyid(this.id).subscribe((data)=>{
    this.regdetails=data;
    console.log(this.regdetails)
  })
  this.getimagecontent();

}
//editing profile
gotoeditprofile(){
  this.router.navigate(['editprofile'],{skipLocationChange :true})
}


getimagecontent(){
  console.log(this.regdetails.file)
var path=this.regdetails.file
console.log(path)
var filename=path.replace(/^.*\\/,"");
console.log(filename)
var finalname=`file:///C:/Users/PAVATY/Pictures/`+filename;
console.log("final name",finalname);


return finalname

}


  ngOnInit(){
//getting registration id
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get('id'));
    });
    this.getbyregistrationid();

  

  }

}
