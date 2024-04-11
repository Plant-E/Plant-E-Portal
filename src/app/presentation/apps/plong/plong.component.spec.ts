import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlongComponent } from './plong.component';

describe('PlongComponent', () => {
  let component: PlongComponent;
  let fixture: ComponentFixture<PlongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlongComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
