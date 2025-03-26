# MyAppointmentApp





## Angular Concepts Used in This project

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
