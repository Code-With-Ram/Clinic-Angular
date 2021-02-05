import { Component, OnInit } from '@angular/core';
import {RecordService} from './../record.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public patient:any;

  constructor(private recordService: RecordService) { }

  ngOnInit() {
    this.patient = this.recordService.patient;
  }

}
