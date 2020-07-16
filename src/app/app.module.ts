import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgpSortModule } from 'ngp-sort-pipe';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    NgpSortModule ,
    AppRoutingModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
