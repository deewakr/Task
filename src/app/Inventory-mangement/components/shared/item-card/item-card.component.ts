import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit, OnChanges {
   @Input() list:any;
   listdata:any=[];
  constructor(private router : Router) { }

  ngOnInit(): void {
    console.log(new Date());
    
  }
 ngOnChanges(): void {
this.listdata=this.list;
   
 }
 Edit(e:any){
   console.log("fvgth",e);
   let d = {...e}
   this.router.navigate(['add-item'],{
     queryParams:{
      data:d
     }
   });
  
 }
 remove(){
 console.log('hello remove');
 }

}
