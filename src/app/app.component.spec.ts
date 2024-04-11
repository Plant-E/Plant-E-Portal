import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  Object.defineProperty(window, 'electronAPI', {
    value: {
      sendDataToAngular: (channel: string, data: any) => {},
      receiveDataFromElectron: (channel: string, func: (data: any) => void) => {},
    },
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'plant-e-electron' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('plant-e-electron');
  });

});
