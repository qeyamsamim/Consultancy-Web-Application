import { Component, OnInit } from '@angular/core';
import { QuickLinksService } from 'src/app/services/quick-links.service';

@Component({
  selector: 'app-about-quick-links',
  templateUrl: './about-quick-links.component.html',
  styleUrls: ['./about-quick-links.component.css']
})
export class AboutQuickLinksComponent implements OnInit {

  links = [];

  constructor(
    private quickLinksService: QuickLinksService
  ) { }

  ngOnInit(): void {
    this.links = this.quickLinksService.getAboutQuickLinks();
  }

}
