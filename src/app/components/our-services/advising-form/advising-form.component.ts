import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AdvisingForm } from '../../../models/advising-form.model';
import { AdvisingFormService } from '../../../services/advisong-form.service';

@Component({
  selector: 'app-advising-form',
  templateUrl: './advising-form.component.html',
  styleUrls: ['./advising-form.component.css']
})
export class AdvisingFormComponent implements OnInit {

  studyLevel = ['Select a Level of Study *', 'High School', 'Undergraduate', 'Masters Degree', 'PhD']
  charCount = '';
  advisingForm: FormGroup;
  pattern = "^[a-zA-Z]{1,30}$";

  constructor(
    private advisingFormService: AdvisingFormService
  ) { }

  ngOnInit(): void {
    this.advisingForm = new FormGroup({
      'fristName': new FormControl(null, [Validators.required, Validators.pattern(this.pattern)]),
      'lastName': new FormControl(null, [Validators.required, Validators.pattern(this.pattern)]),
      'phoneNumber': new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{10,10}$')]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'studyLevel': new FormControl('Select a Level of Study *', Validators.required),
      'programType': new FormControl(null),
      'message': new FormControl(null, Validators.maxLength(200))
    });
  }

  onSubmit() {
    const value = this.advisingForm.value;
    const advisingForm = new AdvisingForm(
      value.fristName,
      value.lastName,
      value.phoneNumber,
      value.email,
      value.studyLevel,
      value.programType,
      value.message
    );
    console.log(advisingForm);
    this.advisingForm.reset();
    this.charCount = '';
  }

}
