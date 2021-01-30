import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassQuickLinksComponent } from './class-quick-links.component';

describe('ClassQuickLinksComponent', () => {
  let component: ClassQuickLinksComponent;
  let fixture: ComponentFixture<ClassQuickLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassQuickLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassQuickLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
