import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryImagesComponent } from './library-images.component';

describe('LibraryImagesComponent', () => {
  let component: LibraryImagesComponent;
  let fixture: ComponentFixture<LibraryImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
