import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremierCicleComponent } from './premier-cicle.component';

describe('PremierCicleComponent', () => {
  let component: PremierCicleComponent;
  let fixture: ComponentFixture<PremierCicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremierCicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremierCicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
