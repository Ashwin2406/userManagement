import { Injectable } from '@angular/core';
import { from } from 'rxjs'; /*doubt*/
import { FresherDetails } from './fresher-details.model';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class FresherDetailsService {

  constructor(private http:HttpClient) { }
  
  readonly baseURL = 'http://localhost:61999/api/FreshersDetails'
  formData:FresherDetails = new FresherDetails();
  list : FresherDetails[];

  postFresherDetails(){
   return this.http.post(this.baseURL, this.formData);
  }

  putFresherDetails(){
    return this.http.put(`${this.baseURL}/${this.formData.fresherId}`, this.formData);
   }
  
  deleteFresherDetails(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as FresherDetails[])
  }
}
