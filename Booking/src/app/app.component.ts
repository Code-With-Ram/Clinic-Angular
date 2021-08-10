import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Clinic';
  public canShowHome = true;
  public canAdminDisplay = false;
  public canBookingDisplay = false;
  public canAppointmentStatusDisplay = false;
  public canContactDisplay=  false;
  public canAboutDisplay=  false;

  showHome(){
    this.canAdminDisplay = false;
    this.canBookingDisplay = false;
    this.canAppointmentStatusDisplay = false;
    this.canContactDisplay=  false;
    this.canAboutDisplay=  false;
    this.canShowHome = true;

  }
showAdmin() {
  this.canAdminDisplay = true;
  this.canBookingDisplay = false;
  this.canAppointmentStatusDisplay=false;
  this.canContactDisplay=  false;
  this.canAboutDisplay=  false;
  this.canShowHome = false;
}

showBooking() {
  this.canAdminDisplay = false;
  this.canBookingDisplay = true;
  this.canAppointmentStatusDisplay=false;
  this.canContactDisplay=  false;
  this.canAboutDisplay=  false;
  this.canShowHome = false;
}

showAppointmentStatus() {
  this.canAdminDisplay = false;
  this.canBookingDisplay = false;
  this.canAppointmentStatusDisplay=true;
  this.canContactDisplay=  false;
  this.canAboutDisplay=  false;
  this.canShowHome = false;
}
showAbout(){
  
}

}
