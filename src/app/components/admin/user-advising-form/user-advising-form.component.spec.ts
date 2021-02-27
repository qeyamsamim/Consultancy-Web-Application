import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdvisingFormComponent } from './user-advising-form.component';

describe('UserAdvisingFormComponent', () => {
  let component: UserAdvisingFormComponent;
  let fixture: ComponentFixture<UserAdvisingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAdvisingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAdvisingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
