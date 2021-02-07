import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesQuickLinksComponent } from './services-quick-links.component';

describe('ServicesQuickLinksComponent', () => {
  let component: ServicesQuickLinksComponent;
  let fixture: ComponentFixture<ServicesQuickLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesQuickLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesQuickLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
