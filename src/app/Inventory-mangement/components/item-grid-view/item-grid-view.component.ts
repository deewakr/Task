import { Component, OnInit } from '@angular/core';
import {data} from '../../utility/temp'
@Component({
  selector: 'app-item-grid-view',
  templateUrl: './item-grid-view.component.html',
  styleUrls: ['./item-grid-view.component.scss']
})
export class ItemGridViewComponent implements OnInit {
   list:any[]=[];
  constructor() {
    this.list= data;
   }

  ngOnInit(): void {

    let newRec = (JSON.parse(localStorage.getItem("userdata")|| '{}'));
    if(!!newRec.item_name) this.list.push(newRec)
   console.log("fhgyuf",this.list);
  }

}
