import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleprofileviewComponent } from './googleprofileview.component';

describe('GoogleprofileviewComponent', () => {
  let component: GoogleprofileviewComponent;
  let fixture: ComponentFixture<GoogleprofileviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleprofileviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleprofileviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
