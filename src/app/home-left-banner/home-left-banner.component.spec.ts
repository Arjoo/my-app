import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLeftBannerComponent } from './home-left-banner.component';

describe('HomeLeftBannerComponent', () => {
  let component: HomeLeftBannerComponent;
  let fixture: ComponentFixture<HomeLeftBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLeftBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLeftBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
