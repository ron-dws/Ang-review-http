import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCicleComponent } from './second-cicle.component';

describe('SecondCicleComponent', () => {
  let component: SecondCicleComponent;
  let fixture: ComponentFixture<SecondCicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondCicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondCicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
