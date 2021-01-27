import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickLinksLibraryComponent } from './quick-links-library.component';

describe('QuickLinksLibraryComponent', () => {
  let component: QuickLinksLibraryComponent;
  let fixture: ComponentFixture<QuickLinksLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickLinksLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickLinksLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
