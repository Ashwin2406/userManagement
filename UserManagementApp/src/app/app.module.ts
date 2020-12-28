import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; /*reactive forms*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';




import { AppComponent } from './app.component';
import { FresherDetailsComponent } from './fresher-details/fresher-details.component';
import { FresherDetailsFormComponent } from './fresher-details/fresher-details-form/fresher-details-form.component';
import { HttpClientModule } from '@angular/common/http';

import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    FresherDetailsComponent,
    FresherDetailsFormComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,  /*reactive forms*/
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
