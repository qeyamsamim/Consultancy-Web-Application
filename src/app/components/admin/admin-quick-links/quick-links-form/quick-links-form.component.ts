import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuickLinks } from 'src/app/models/quick-links.model';
import { QuickLinksService } from 'src/app/services/quick-links.service';

@Component({
  selector: 'app-quick-links-form',
  templateUrl: './quick-links-form.component.html',
  styleUrls: ['./quick-links-form.component.css', '../../admin.component.css']
})
export class QuickLinksFormComponent implements OnInit {

  quickLinksForm: FormGroup;
  message = 'Quick Link';

  constructor(
    private quickLinksService: QuickLinksService
  ) { }

  ngOnInit(): void {
    this.quickLinksForm = new FormGroup({
      reusableForm: new FormGroup({
        'title': new FormControl(null, Validators.required),
        'description': new FormControl(null, Validators.required),
        'imgURL': new FormControl(null, Validators.required),
        'url': new FormControl(null, Validators.required),
        'tag': new FormControl('other', Validators.required)
      })
    });
  }

  onSubmit() {
    const value = this.quickLinksForm.value.reusableForm;
    const newQuickLink = new QuickLinks(
      value.title,
      value.description,
      value.imgURL,
      value.url,
      value.tag
    );
    this.quickLinksService.addQuickLinks(newQuickLink);
    this.quickLinksForm.reset();
  }

}
