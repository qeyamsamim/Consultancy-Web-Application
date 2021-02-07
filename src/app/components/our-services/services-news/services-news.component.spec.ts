import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesNewsComponent } from './services-news.component';

describe('ServicesNewsComponent', () => {
  let component: ServicesNewsComponent;
  let fixture: ComponentFixture<ServicesNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
