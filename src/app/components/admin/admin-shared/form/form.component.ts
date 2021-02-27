import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css', '../../../../app.component.css']
})
export class FormComponent implements OnInit {
  @Input() public reusableForm: FormGroup;
  @Input() message: string;

  tags = ['library', 'class', 'studyAbroad', 'successStory', 'other'];

  constructor() { }

  ngOnInit(): void {
  }

}
