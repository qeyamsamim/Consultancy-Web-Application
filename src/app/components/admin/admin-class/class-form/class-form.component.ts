import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OurClass } from 'src/app/models/class.model';
import { ClassesService } from 'src/app/services/classes.service';

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.css', '../../admin.component.css']
})
export class ClassFormComponent implements OnInit {

  classForm: FormGroup;

  constructor(
    private classesService: ClassesService
  ) { }

  ngOnInit(): void {
    this.classForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'topics': new FormControl(null, Validators.required),
      'schedule': new FormControl(null, Validators.required),
      'instructor': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required)
    })
  }

  onSubmit() {
    const value = this.classForm.value;
    const newClass = new OurClass(
      value.title,
      value.topics,
      value.schedule,
      value.instructor,
      value.description,
      'ssss',
      'ssssss'
    );
    this.classesService.addClass(newClass);
    this.classForm.reset();
    console.log(value);
  }

}
