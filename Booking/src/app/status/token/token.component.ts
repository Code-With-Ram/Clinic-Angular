import { Component, OnInit } from '@angular/core';
import {RecordService} from './../../record.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {
  public tokenDetails={};
  constructor(public recordService: RecordService) { }


  ngOnInit() {
    this.tokenDetails = this.recordService.tokenDetails;
  }
}
