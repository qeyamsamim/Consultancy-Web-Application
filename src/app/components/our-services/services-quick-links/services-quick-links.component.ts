import { Component, OnInit } from '@angular/core';
import { QuickLinks } from 'src/app/models/quick-links.model';
import { QuickLinksService } from 'src/app/services/quick-links.service';

@Component({
  selector: 'app-services-quick-links',
  templateUrl: './services-quick-links.component.html',
  styleUrls: ['./services-quick-links.component.css']
})
export class ServicesQuickLinksComponent implements OnInit {

  links: QuickLinks[] = [];

  constructor(
    private quickLinksService: QuickLinksService
  ) { }

  ngOnInit(): void {
    this.links = this.quickLinksService.getQuickLinks();
  }

}
