import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQuickLinksComponent } from './admin-quick-links.component';

describe('AdminQuickLinksComponent', () => {
  let component: AdminQuickLinksComponent;
  let fixture: ComponentFixture<AdminQuickLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminQuickLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQuickLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
