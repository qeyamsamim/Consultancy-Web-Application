import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css', '../../admin.component.css']
})
export class DataListComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

}
