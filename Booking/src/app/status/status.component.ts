import { Component, OnInit } from '@angular/core';
import {RecordService} from './../record.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  constructor(private recordService: RecordService) { }
  public canSearchDisplay = false;
  public canTokenDisplay = false;
  public canOptionDisplay = false;



  ngOnInit() {

  }
showSearch(){
  this.canSearchDisplay=!this.canSearchDisplay;
}
showToken(){
  this.canTokenDisplay=!this.canTokenDisplay;

}
showOption(){
  this.canOptionDisplay=!this.canOptionDisplay;
}
}
