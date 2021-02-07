import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutQuickLinksComponent } from './about-quick-links.component';

describe('AboutQuickLinksComponent', () => {
  let component: AboutQuickLinksComponent;
  let fixture: ComponentFixture<AboutQuickLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutQuickLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutQuickLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
