import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Task } from './task';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class TaskService {

  

  constructor(private http: HttpClient) {  }

  private tasksUrl = 'api/tasks';

 
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl)
  }

  addTask (task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, task, httpOptions)
  }

}
