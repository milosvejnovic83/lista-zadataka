# ListaZadataka

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Description

The application have a toolbar, which on the left has a label with the application name and on the right side there are two chips showing "total results of unfinished tasks" and "total results of completed tasks".

Below the toolbar is a task list. Each todo item contain a description / text and it have a checkbox that determine the status of the tasks, whether it is completed or not. Each action on the checkbox reflect the current total state of the unfinished and filled tasks in the toolbar.

Under the task list, the input field with the label "new todo item" is located with the "+" button in order to add a new task to the list. A validation over the field for entering a new task is added and an appropriate error message is displayed if an input error occurs.

Application is using rx / js Observables and also it creates a random task every 20 seconds, which appears in the list.
