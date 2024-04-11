import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  Object.defineProperty(window, 'electronAPI', {
    value: {
      sendDataToAngular: jest.fn(),
      receiveDataFromElectron: jest.fn(),
    },
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
