import { Component, OnInit } from '@angular/core';
import { QuickLinks } from 'src/app/models/quick-links.model';
import { QuickLinksService } from 'src/app/services/quick-links.service';

@Component({
  selector: 'app-class-quick-links',
  templateUrl: './class-quick-links.component.html',
  styleUrls: ['./class-quick-links.component.css', '../../../app.component.css']
})
export class ClassQuickLinksComponent implements OnInit {

  links: QuickLinks[] = [];

  constructor(
    private quickLinksService: QuickLinksService
  ) { }

  ngOnInit(): void {
    this.links = this.quickLinksService.getClassQuickLinks();
  }

}
