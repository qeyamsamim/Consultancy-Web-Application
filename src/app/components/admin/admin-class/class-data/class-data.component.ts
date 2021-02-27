import { Component, OnInit } from '@angular/core';
import { OurClass } from 'src/app/models/class.model';
import { ClassesService } from 'src/app/services/classes.service';

@Component({
  selector: 'app-class-data',
  templateUrl: './class-data.component.html',
  styleUrls: ['./class-data.component.css', '../../admin.component.css']
})
export class ClassDataComponent implements OnInit {

  classes: OurClass[];
  search = '';

  constructor(
    private classesService: ClassesService
  ) { }

  ngOnInit(): void {
    this.classes = this.classesService.getClass();
    this.classesService.classesChanged
      .subscribe(
        (ourClass: OurClass[]) => {
          this.classes = ourClass;
        }
      )
  }

}
