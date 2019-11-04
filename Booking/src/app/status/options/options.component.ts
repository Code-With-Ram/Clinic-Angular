import { Component, OnInit } from '@angular/core';
import {RecordService} from './../../record.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor(private recordService: RecordService) { }


  ngOnInit() {

  }
Update(index)
{
  var time = parseInt(this.recordService.patient[index-1].time[0])
  alert("Appointment canceled");
  for (let i = index; i < this.recordService.patient.length; i++) {
    time+=1;
    this.recordService.patient[i].time = String(time)+':00 PM';
  }
}
  CancelBooking() {
    for (let i = 0; i < this.recordService.patient.length; i++) {
      if(this.recordService.tokenDetails.token == this.recordService.patient[i].token){
        this.recordService.patient.splice(i,1);
        this.Update(i);
        this.recordService.tokenDetails= {'token':0,'name':'','age':0,'phone':'','email':'','gender':'','address':'', 'issue':'','time':''};
      }

    }

  }
}
