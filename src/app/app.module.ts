import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';


import { AppComponent } from './app.component';
import { TaskService } from './task.service';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [TaskService, InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
