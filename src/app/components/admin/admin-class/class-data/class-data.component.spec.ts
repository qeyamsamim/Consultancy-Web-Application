import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDataComponent } from './class-data.component';

describe('ClassDataComponent', () => {
  let component: ClassDataComponent;
  let fixture: ComponentFixture<ClassDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
