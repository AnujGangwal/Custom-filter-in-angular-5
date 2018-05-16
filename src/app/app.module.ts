import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {routes} from './app.route';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FilterDataComponent } from './filter-data/filter-data.component';
import { FilterDataService } from './filter-data/filter-data.service';
import { HeaderComponent } from './header/header.component';
import { LoaderService } from './loader.service'


@NgModule({
  declarations: [
    AppComponent,
    FilterDataComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [FilterDataService,LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
