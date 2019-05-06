import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  myEmail = 'achmadfatkharrofiqi404@gmail.com';
  myFav = {movie:'Aquaman',music:'Queen',sport:'Futsal'};
  
  myFavFruit = [
    {id:1, name:'Apple'},
    {id:2, name:'Blueberry'},
    {id:3, name:'Chery'},
    {id:4, name:'Orange'},
    {id:5, name:'Manggo'},
  ];

  constructor(){

  }
}
