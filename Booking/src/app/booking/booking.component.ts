import { Component, OnInit } from '@angular/core';
import {RecordService} from './../record.service';
import {BookingForm} from './../booking-form';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  public patient:any;
  public lasttime = 4;
  public lasttoken=4;
  public BookForm = new BookingForm('' , '' , '' , '' , '' , '' , '');
  constructor(private recordService: RecordService) { }
  public canPop=  false;
  ngOnInit() {
    this.patient = this.recordService.patient;

  }
  getAge(dob:any) {

    var today = new Date().toDateString();
    var year = parseInt(today.substring(today.length - 4));
    var dobyear = parseInt(dob.substring(0,4));

   var age =  year - dobyear;
    return age;
  }

  allotTime() {
    this.lasttime =this.lasttime+1;
    return String(this.lasttime)+':00 PM';
  }

  onSubmit() {
    this.lasttoken+=1;
    this.patient.push({'token':this.lasttoken,'name':this.BookForm.name,'age':this.getAge(this.BookForm.dob),'phone':this.BookForm.phone,'email':this.BookForm.email,'issue':this.BookForm.issue,'time':this.allotTime() } );
    //this.patient.pop();
    this.pop();
  }

  pop(){
    this.canPop = !this.canPop;
  }
}
