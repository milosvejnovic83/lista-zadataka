import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const tasks = [
    { id: 1, check: true, taskName: 'Task1', taskTask: 'ToDoToDoToDoToDoToDo1'},
    { id: 2, check: false, taskName: 'Task2', taskTask: 'ToDoToDoToDoToDoToDo2'},
    { id: 3, check: true, taskName: 'Task3', taskTask: 'ToDoToDoToDoToDoToDo3'},
    { id: 4, check: false, taskName: 'Task4', taskTask: 'ToDoToDoToDoToDoToDo4'},
    { id: 5, check: true, taskName: 'Task5', taskTask: 'ToDoToDoToDoToDoToDo5'},
    ];
    return {tasks};
  }
}
