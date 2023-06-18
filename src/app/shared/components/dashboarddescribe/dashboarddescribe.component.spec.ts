import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarddescribeComponent } from './dashboarddescribe.component';

describe('DashboarddescribeComponent', () => {
  let component: DashboarddescribeComponent;
  let fixture: ComponentFixture<DashboarddescribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboarddescribeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboarddescribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
