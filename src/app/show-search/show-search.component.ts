import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.css']
})
export class ShowSearchComponent implements OnInit {
  content: any;

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
  searchArray: Todo[] | undefined
  searchThis(data: any) {
    this.content = this.searchArray
    console.log(data)
    if (data) {
      this.content = this.content.filter(function (ele: { name: string; }, i: any, array: any) {
        let arrayelement = ele.name.toLowerCase()
        return arrayelement.includes(data)
      })
    }
    else {
      console.log(this.content)
    }
    console.log(this.content)
  }


  


}
