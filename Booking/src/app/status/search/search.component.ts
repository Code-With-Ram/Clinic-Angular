import { Component, OnInit } from '@angular/core';
import {RecordService} from './../../record.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public patient_token='';
  constructor(private recordService: RecordService) { }


  ngOnInit() {

  }

  SearchToken()
  {
    this.recordService.getToken(this.patient_token);
    this.patient_token='';
  }

}
