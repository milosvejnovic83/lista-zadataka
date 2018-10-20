import { Component, OnInit, NgModule } from '@angular/core';
import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  i: number;
  count: number = 3;
  tasks: Task[];
  rows: number = 5;
  no: number = this.rows - this.count; 
  

  constructor(private taskService: TaskService) { 
  
  }

  ngOnInit() {
    this.getTasks();
    setInterval(() => {
      this.addRowww("", "");
    }, 20000);
  }

  

  getTasks(): void {
    this.taskService.getTasks()
        .subscribe(tasks => this.tasks = tasks);
  }

  add(taskName: string, taskTask: string): void {
    taskName = taskName.trim();
    taskTask = taskTask.trim();
    let x = 0;
    for (this.i = 0; this.i < this.rows; this.i++) {
      
      if(taskName == this.tasks[this.i].taskName) {
       // alert("Naziv zadatka mora biti jedinstven!!!")
        x = x+1;
      } 
    }   
    if (x == 0) {
      this.taskService.addTask({ taskName, taskTask } as Task)
      .subscribe(task => {
        this.tasks.push(task);
      });
      this.rows = this.rows + 1;
      this.no = this.rows - this.count;
    }
    else {
      alert("Naziv zadatka mora biti jedinstven!!!")
    }
  }

  changed(){
    this.count = 0;
    this.no = this.rows;
    this.tasks.forEach(item=>{
      if(item.check){     
        this.count= this.count+1
        this.no = this.rows - this.count;
      }  
    } )
  }

  addRowww(taskName: string, taskTask: string) {
    taskName = Math.random().toString(36).substr(2, 5).trim();
    taskTask = Math.random().toString(36).substr(2, 5).trim();
    let x = 0;
    for (this.i = 0; this.i < this.rows; this.i++) {
      
      if(taskName == this.tasks[this.i].taskName) {
       // alert("Naziv zadatka mora biti jedinstven!!!")
        x = x+1;
      } 
    }   
    if (x == 0) {
      this.taskService.addTask({ taskName, taskTask } as Task)
      .subscribe(task => {
        this.tasks.push(task);
      });
      this.rows = this.rows + 1;
      this.no = this.rows - this.count;
    }
    else {
      alert("Naziv zadatka mora biti jedinstven!!!")
    }
  }

  
}
