import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickLinksFormComponent } from './quick-links-form.component';

describe('QuickLinksFormComponent', () => {
  let component: QuickLinksFormComponent;
  let fixture: ComponentFixture<QuickLinksFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickLinksFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickLinksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
