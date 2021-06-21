import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoList';
  @Input() addTaskDes: string = "";
  @Input() addCompleted: boolean = false;
  @Output() searchcriteria = new EventEmitter<string>();
  searchTask: string ="";
  searchList!: Todo[];
  taskList: Todo[] =[
    {
      task: 'Mow the grass',
      completed: true
    },
    {
      task: 'Take out the garbage',
      completed: false
    },
    {
      task: 'Figure out how Angular works',
      completed: true
    },
    {
      task: 'Take the dog for a walk',
      completed: false
    }
  ];

  tasksToDo = true;

  searchForTask() {
    for (let i = 0; i < this.taskList.length; i++) {
      if(this.taskList[i].task.includes(this.searchTask)){
        this.searchList.push(
          {
            task: this.taskList[i].task,
            completed: this.taskList[i].completed
          }
        );
      }
      
    }

  }

  resetTasks() {
    this.tasksToDo = true;
  }
  countTasks() {
    this.tasksToDo = false;
  }
  
  

  addTask() {
    this.taskList.push(
      {
        task: this.addTaskDes,
        completed: Boolean(this.addCompleted)
      }
    );
  }

  removeTheTask(theTask: Todo) {
    for(let i=0; i<this.taskList.length; i++){
      if(this.taskList[i] == theTask){
        this.taskList.splice(i,1);
        return;
      }
    }
  }
}
