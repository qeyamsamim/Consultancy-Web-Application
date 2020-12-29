import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToeflIbtComponent } from './toefl-ibt.component';

describe('ToeflIbtComponent', () => {
  let component: ToeflIbtComponent;
  let fixture: ComponentFixture<ToeflIbtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToeflIbtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToeflIbtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
