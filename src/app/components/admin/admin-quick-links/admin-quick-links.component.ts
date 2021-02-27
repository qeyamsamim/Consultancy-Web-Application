import { Component, OnInit } from '@angular/core';
import { QuickLinks } from 'src/app/models/quick-links.model';
import { QuickLinksService } from 'src/app/services/quick-links.service';

@Component({
  selector: 'app-admin-quick-links',
  templateUrl: './admin-quick-links.component.html',
  styleUrls: ['./admin-quick-links.component.css']
})
export class AdminQuickLinksComponent implements OnInit {

  quickLinks: QuickLinks[];
  search = '';

  constructor(
    private quickLinksService: QuickLinksService
  ) { }

  ngOnInit(): void {
    this.quickLinks = this.quickLinksService.getQuickLink();
    this.quickLinksService.quickLinksChanged
      .subscribe(
        (quickLink: QuickLinks[]) => {
          this.quickLinks = quickLink;
        }
      );
  }
}
