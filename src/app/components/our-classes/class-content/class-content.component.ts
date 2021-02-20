import { Component, OnInit } from '@angular/core';

import { ClassesService } from 'src/app/services/classes.service';

import { OurClass } from '../../../models/class.model';

@Component({
  selector: 'app-class-content',
  templateUrl: './class-content.component.html',
  styleUrls: ['./class-content.component.css', '../../../app.component.css']
})
export class ClassContentComponent implements OnInit {

  classes: OurClass[] = [];

  constructor(
    private classesService: ClassesService
  ) { }

  ngOnInit(): void {
    this.classes = this.classesService.getClass();
  }

}
