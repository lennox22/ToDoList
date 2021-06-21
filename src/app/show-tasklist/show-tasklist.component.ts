import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-show-tasklist',
  templateUrl: './show-tasklist.component.html',
  styleUrls: ['./show-tasklist.component.css']
})
export class ShowTasklistComponent implements OnInit {

  @Input() thisTask: Todo ={task: '', completed: false};
  constructor() { }

  @Output() remove: EventEmitter<Todo> = new EventEmitter<Todo>();

  ngOnInit(): void {
  }

  deleteTask() {
    this.remove.emit(this.thisTask);
  }

  isClicked = false;

  OnClick(){
    this.isClicked=true;
  }
  OffClick(){
    this.isClicked=false;
  }
  CompletedTask(){
    this.thisTask.completed=true;
  }
}
