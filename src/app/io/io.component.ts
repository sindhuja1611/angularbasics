import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-io',
  templateUrl: './io.component.html',
  styleUrls: ['./io.component.css']
})
export class IoComponent implements OnInit {

  @Input() ParentName: any;

  constructor() { }

  ngOnInit(): void {
  }

}
