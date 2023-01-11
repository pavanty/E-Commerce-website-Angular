import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './../apiservice.service';
import { ActivatedRoute,ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-googleprofileview',
  templateUrl: './googleprofileview.component.html',
  styleUrls: ['./googleprofileview.component.scss']
})
export class GoogleprofileviewComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private service:ApiserviceService) { }
id:any
userdata:any;
  ngOnInit(): void {

  //   this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
  //     this.id = params.get('id');
  //   });
  //   console.log(this.id)
  // }
  this.service.selectedProductgoogle$.subscribe((googledata)=>(
    this.userdata=googledata),
  )
  console.log("profileviewgoogle",this.userdata)
}
}
