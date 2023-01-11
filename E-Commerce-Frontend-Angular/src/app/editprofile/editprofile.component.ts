import { ApiserviceService } from './../apiservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {

  constructor(private service: ApiserviceService, private router: Router) { }
regid:any;
regdetails:any;
message:any;
reply:any;
  ngOnInit(): void {

    this.service.selectedProduct$.subscribe((data)=>(this.regid=data),

    );
this.getbyregistrationid();
  }
  getbyregistrationid(){
    this.service.getregistrerbyid(this.regid).subscribe((data)=>{
      this.regdetails=data;
      console.log(this.regdetails)
    })

  
   
  }
  updatecomponent(){
      let resp=this.service.editprofilebyid(this.regid,this.regdetails);
      resp.subscribe((data) => (this.message = data,
        this.reply = 'update successfully'
        
        
        ));
  
   

  }

  gotoprofilepage(){
    setTimeout(() => {
      this.router.navigate(['/viewregistration',this.regid], { skipLocationChange: true });
    }, 2000);
  }

}
