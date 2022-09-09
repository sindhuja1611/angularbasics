import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-io',
  templateUrl: './io.component.html',
  styleUrls: ['./io.component.css']
})
export class IoComponent {

  showusers:Boolean=true;
  selecteduser:any;


 users=[
  { name:'Sarvesh',Eid:'12',age:35},
  { name:'Sindhu',Eid:'12',age:35},
  { name:'Hamrutha',Eid:'12',age:35},
  { name:'Harsith',Eid:'12',age:35},
  { name:'Rishi',Eid:'12',age:35}
 ];


 list:any[]=[];
 addTask(item:string)
 {
  this.list.push({id:this.list.length,name:item})
  console.warn(this.list);
 }
removeTask(id:number)
{
  console.warn(id);
  this.list=this.list.filter(item=>item.id! === id);

}
 
}
