import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FresherDetails } from 'src/app/shared/fresher-details.model';
import { FresherDetailsService } from 'src/app/shared/fresher-details.service';

@Component({
  selector: 'app-fresher-details-form',
  templateUrl: './fresher-details-form.component.html',
  styles: [
  ]
})
export class FresherDetailsFormComponent implements OnInit {

  constructor(public service:FresherDetailsService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    
    if(this.service.formData.fresherId == 0)
      this.insertRecord(form);
      else
      this.updateRecord(form);
   
  }
  insertRecord(form:NgForm){
    
    this.service.postFresherDetails().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted', 'User Management')
      },
      err => {
        console.log(err);
      }
    );
  }
  updateRecord(form:NgForm){
    this.service.putFresherDetails().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated', 'User Management')
      },
      err => {
        console.log(err);
      }
    );

  }
  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData= new FresherDetails();
  }

}
