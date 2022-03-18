import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SortableDirective } from './shared/directives/sortable.directive';
import { TableCompleteComponent } from './shared/components/table-complete/table-complete.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent, 
    SortableDirective, 
    TableCompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
