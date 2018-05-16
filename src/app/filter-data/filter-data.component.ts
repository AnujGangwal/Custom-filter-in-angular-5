import { Component, OnInit } from '@angular/core';
import { FilterDataService } from './filter-data.service'
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-filter-data',
  templateUrl: './filter-data.component.html',
  styleUrls: ['./filter-data.component.css']
})
export class FilterDataComponent implements OnInit {
  receivedData:any;
 finalData:any;
 name;
 film;
 year;
 gender;
   constructor(public service:FilterDataService,public loaderService:LoaderService) {
    this.getData();
   }

  ngOnInit() {
  }

  filter(filterBy){
    this.finalData = [];
   this.finalData = this.receivedData
   var filter = [];
   if(filterBy == 'name'){
     this.gender = "";
     this.year = "";
     this.film = "";
    filter =  this.finalData.filter(data =>data['name'].includes(this.name));
    this.finalData = filter;
   }else if(filterBy == 'gender'){
    this.name = "";
    this.year = "";
    this.film = "";
    filter =  this.finalData.filter(data =>data['gender']== this.gender);
    this.finalData = filter;
    if(this.gender == '')
    this.finalData = this.receivedData;
   }else if(filterBy == 'year'){
    this.gender = "";
    this.name = "";
    this.film = "";
    filter =  this.finalData.filter(data =>data['birth_year'].includes(this.year));
    this.finalData = filter;
   }else if(filterBy == 'film' && this.film != ''){
     var check;
     this.gender = "";
     this.year = "";
     this.name = "";
    for(var i=0;i<this.finalData.length;i++){
      for(var j=0;j<=this.finalData[i]['filmList'].length;j++){
        if(this.finalData[i].filmList[j]){
         check = this.finalData[i].filmList[j].indexOf(this.film);
          console.log("inde",filter)
          if(check !== -1){
            filter.push(this.finalData[i]);
          }
        }
      }
        }
        this.finalData = filter;
   }else if(this.film == '' ){
     this.finalData = this.receivedData;
   }
  }

  getData(){
    this.loaderService.display(true);
    this.service.getData().subscribe(data=>{
      console.log("data",data['results']);
      this.receivedData = data['results'];
      this.receivedData.forEach(element => {
        var filmList = [];
        element['films'].forEach(element => {
          this.service.getFilm(element).subscribe(data=>{
            filmList.push(data['title']);
          },error=>{
            console.log("error",error);
          })
        });
        element['filmList'] = filmList;
      });
      this.finalData = this.receivedData;
      this.loaderService.display(false);
    },error=>{
      console.log("error",error);
      this.loaderService.display(false);
    })  
  }

  resetFilters(){
    this.film = '';
    this.name = '';
    this.gender = '';
    this.year = '';
    this.finalData = this.receivedData;
  }
  
}
