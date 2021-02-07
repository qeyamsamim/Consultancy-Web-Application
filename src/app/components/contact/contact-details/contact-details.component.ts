import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contacts = [
    {
      place: 'Kabul',
      address: 'Kart-e 3, Kabul, Afghanistan',
      contact: ['+93798675430,', '+93788123477'],
      email: 'webapp@consultancy.af'
    },
    {
      place: 'Mazar Sharif',
      address: 'Mazar Address, Mazar Sharif, Afghanistan',
      contact: ['+93798675430,', '+93788123477'],
      email: 'webapp@consultancy.af'
    },
    {
      place: 'Herat',
      address: 'Herat Address, Herat, Afghanistan',
      contact: ['+93798675430,', '+93788123477'],
      email: 'webapp@consultancy.af'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
