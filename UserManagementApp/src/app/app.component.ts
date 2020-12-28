import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'; /*validators*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UserManagementApp';


  /*email validation*/
  emailId= new FormControl ('', [Validators.required, Validators.email]);
}
