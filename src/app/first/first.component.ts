import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
 name: string=" sindhu ";
  @Input() stud= '';

  @Output() opt = new EventEmitter<string>();

  add(value:string)
  {
    this.opt.emit(value);
  }

}
