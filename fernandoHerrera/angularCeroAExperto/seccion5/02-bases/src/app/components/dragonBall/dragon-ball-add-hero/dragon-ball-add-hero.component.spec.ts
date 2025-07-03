import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonBallAddHeroComponent } from './dragon-ball-add-hero.component';

describe('DragonBallAddHeroComponent', () => {
  let component: DragonBallAddHeroComponent;
  let fixture: ComponentFixture<DragonBallAddHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonBallAddHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonBallAddHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
