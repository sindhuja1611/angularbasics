import { Component,Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  name = 'STRING INERPOLATION::Hai Hello Welcome';
  A:number=10;
  B:number=20;
  imgurl="https://static.javatpoint.com/tutorial/angular7/images/angular-7-logo.png";    
  Fullname:string="HaiEveryOne";

  add(){
    return this.A+this.B;
  }
  onSave($event:any){    
  console.log("Save button is clicked!", $event);    
}    

@Input() Student= 'SARVESH ';

currentwinner='Sindhuja';

items = ['item1', 'item2', 'item3', 'item4'];

addItem(newItem: string) {
  this.items.push(newItem);
}
ParentName:any;


}
