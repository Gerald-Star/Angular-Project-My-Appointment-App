import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent  implements OnInit{
  // Define the properties of the class
  newAppointmentTitle : string = "";
  newAppointmentDate : Date = new Date();

  appointments: Appointment[] = []
  // implement the OnInit interface for the LifeCycle Hook ngOnInit()
  // It gets invoked after the constructor of the component class is called
  ngOnInit(): void {
       // Retrieve the appointments from the local storage of the browser using JSON.parse() method
    let savedAppointments = localStorage.getItem('appointments');
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
  }
  
  addAppointment() {
    //alert(this.newAppointmentTitle + " " + this.newAppointmentDate);
    // Using the trim() method to remove any whitespace from the beginning and end of the string
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: 1,
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
        
      }
      this.appointments.push(newAppointment);

      // Reset the form
      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();
      //alert(this.appointments.length);

      // Storing the appointments in the local storage of the browser using JSON.stringify() method
      localStorage.setItem('appointments', JSON.stringify(this.appointments));
    }
    
  }
  // remove the appointment from the list using splice() method
  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
  }
  
}