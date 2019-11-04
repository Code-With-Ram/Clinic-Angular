import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class RecordService {
public patient =
[
  {'token':1,'name':'Ram','age':19,'phone':'9846621211','email':'ram@gmail.com','gender':'Male','address':'Mahalaxmi', 'issue':'Cold / Fever','time':'1:00 PM'},

  {'token':2,'name':'Sam','age':42,'phone':'9842121211','email':'sam@gmail.com','gender':'Male','address':'Jayanagar','issue':'Diabetes','time':'2:00 PM' },

  {'token':3,'name':'Raju','age':27,'phone':'93834212211','email':'Raju@gmail.com','gender':'Male','address':'Jayanagar','issue':'ENT','time':'3:00 PM' },

  {'token':4,'name':'Geetha','age':22,'phone':'9845628121','email':'Geetha@gmail.com','gender':'Female','address':'Jayanagar','issue':'Pregnency','time':'4:00 PM' }

];
public tokenDetails= {'token':0,'name':'','age':0,'phone':'','email':'','gender':'','address':'', 'issue':'','time':''};
  constructor() { }

getToken(token){
  //alert('dscds');
  this.tokenDetails= {'token':0,'name':'','age':0,'phone':'','email':'','gender':'','address':'', 'issue':'','time':''};
  for (let i = 0; i < this.patient.length; i++) {

    if(this.patient[i].token==token)
        {
          this.tokenDetails = this.patient[i];
          break;
      }
  }

}



}
