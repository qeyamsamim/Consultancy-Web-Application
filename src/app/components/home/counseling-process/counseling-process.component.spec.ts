import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounselingProcessComponent } from './counseling-process.component';

describe('CounselingProcessComponent', () => {
  let component: CounselingProcessComponent;
  let fixture: ComponentFixture<CounselingProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounselingProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounselingProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
