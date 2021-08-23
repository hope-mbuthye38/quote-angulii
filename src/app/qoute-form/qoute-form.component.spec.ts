import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QouteFormComponent } from './qoute-form.component';

describe('QouteFormComponent', () => {
  let component: QouteFormComponent;
  let fixture: ComponentFixture<QouteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QouteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QouteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
