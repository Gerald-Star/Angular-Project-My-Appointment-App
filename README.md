# MyAppointmentApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.




## Angular Concepts

Programming language use in Angular is Typescript
TypeScript is superset of JS that adds static types

The naming convention use in Angular is PascalCase and CamelCase


## One way data binding in Angular

<!-- Add the following code to the AppointmentListComponent class: -->
  appointment: Appointment = {
    id: 1,
    name: 'John Doe',
    date: '2021-09-01',
    time: new Date('2021-09-01T10:00:00')
  }
- component to template
## Two way data binding in Angular

In two way data binding we make use of the app.module.ts
- import the {FormsModule}

## Starting the server in Angular with npx and ng

npx ng serve

## Starting the server with ng serve

## Creating components on local Angular vs global Angular

npx ng g component appointment-list

## How to create models
npx ng generate interface models/appointment


## Using *ngFor to loop elements in Angular
## Using piping in Angular


## Difference between one way data binding and two way data binding in Angular


## Storing Data using the local Storage

- Storing Appointments in the local Storage- converting it to JSON

## Why using the local Storage is still good for storing Angular application

## Process of implementing LifeCycle Hook OnInit in Angular - How To Store Date and Load data using ngOnit

- import the OnInit from Angular Core
- Implement the interface - ngOnit()
 ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
- 

- Using ngOnInit to load appointments from local storage

## We can make use of LifeCycle hook in Angular to import components

## What is component in Angular?

A TypeScript class that controls a part of the user interface and handles associated business logic.


## How to create a component in Angular
- ng generate component componentName

## What are the main parts of Angular component
A TypeScript class (containing component logic) an HTML template, and CSS styles


# What is one-way data bindning in Angular

## What syntax do you use for one-way data binding in Angular
{{data}} for interpolation


## How to create a for loop in Angular

*ngFor="Let item of items"


## How do you bind a method to an html-button click event in Angular
(click)="methodName()"

## What is a local reference in Angular
