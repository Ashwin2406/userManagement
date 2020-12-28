import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FresherDetails } from '../shared/fresher-details.model';
import { FresherDetailsService } from '../shared/fresher-details.service';

@Component({
  selector: 'app-fresher-details',
  templateUrl: './fresher-details.component.html',
  styles: [
  ]
})
export class FresherDetailsComponent implements OnInit {
 
 public first :string;
 public second :string;
 public phone :string;
 public mail :string;
 public addres :string;
 public gend :string;
 public actives :string;
  constructor(public service: FresherDetailsService,
    private toastr:ToastrService) { }
    public showModal : boolean = false;
  ngOnInit(): void {
  
    this.service.refreshList();
  }

  populateForm(selectedRecord:FresherDetails){
    this.service.formData = Object.assign({}, selectedRecord);
  }
  onDelete(id:number){
    if(confirm('Are you sure to delete this record?'))
      {
        this.service.deleteFresherDetails(id)
        .subscribe(
        res=>{
          this.service.refreshList();
          this.toastr.error("Deleted", "User Management")
        },
        err=>{console.log(err)}
        )
     }
    }
     /*search function */
     
     searchfirst(){
       
         if(this.first!="")
         {
             this.service.list = this.service.list.filter(res=>{
            return res.firstName.toLocaleLowerCase().match(this.first.toLocaleLowerCase());
          });
          }else if(this.first== ""){
            this.ngOnInit();
          }
     }
     searchsecond(){
       
      if(this.second!="")
      {
          this.service.list = this.service.list.filter(res=>{
         return res.secondName.toLocaleLowerCase().match(this.second.toLocaleLowerCase());
       });
       }else if(this.second== ""){
         this.ngOnInit();
       }
  }
  searchphone(){
       
    if(this.phone!="")
    {
        this.service.list = this.service.list.filter(res=>{
       return res.phoneNumber.toLocaleLowerCase().match(this.phone.toLocaleLowerCase());
     });
     }else if(this.phone== ""){
       this.ngOnInit();
     }
}
searchmail(){
       
  if(this.mail!="")
  {
      this.service.list = this.service.list.filter(res=>{
     return res.emailId.toLocaleLowerCase().match(this.mail.toLocaleLowerCase());
   });
   }else if(this.mail== ""){
     this.ngOnInit();
   }
}
searchaddres(){
       
  if(this.addres!="")
  {
      this.service.list = this.service.list.filter(res=>{
     return res.address.toLocaleLowerCase().match(this.addres.toLocaleLowerCase());
   });
   }else if(this.addres== ""){
     this.ngOnInit();
   }
}
searchgend(){
       
  if(this.gend!="")
  {
      this.service.list = this.service.list.filter(res=>{
     return res.gender.toLocaleLowerCase().match(this.gend.toLocaleLowerCase());
   });
   }else if(this.gend== ""){
     this.ngOnInit();
   }
}
searchactives(){
       
  if(this.actives!="")
  {
      this.service.list = this.service.list.filter(res=>{
     return res.active.toLocaleLowerCase().match(this.actives.toLocaleLowerCase());
   });
   }else if(this.actives== ""){
     this.ngOnInit();
   }
}







}
