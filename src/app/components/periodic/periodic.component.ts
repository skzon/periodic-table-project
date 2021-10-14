import { Component, OnInit } from '@angular/core';
import countries from 'src/app/_files/countries.json'
@Component({
  selector: 'app-periodic',
  templateUrl: './periodic.component.html',
  styleUrls: ['./periodic.component.css']
})
export class PeriodicComponent implements OnInit {
  title = 'PeriodicTable';
  l=[1,2]
  ll=[1]
  emptyList=[1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  largeList=[1,1,1,1,1]
  count=0
  cat1=true
  cat2=false
  cat3=false
  cat4=false
  cat5=false
  cat6=false
  cat7=false
  public countryList:{name:string, code:string, category:string,rank:number}[] = countries;

  constructor() { }

  ngOnInit(): void {
  }

}
