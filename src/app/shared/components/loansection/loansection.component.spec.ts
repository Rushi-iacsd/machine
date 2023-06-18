import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansectionComponent } from './loansection.component';

describe('LoansectionComponent', () => {
  let component: LoansectionComponent;
  let fixture: ComponentFixture<LoansectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoansectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoansectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
