import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css', '../admin.component.css']
})
export class SearchComponent implements OnInit {
  @Input() search: string;

  constructor() { }

  ngOnInit(): void {
  }

}
