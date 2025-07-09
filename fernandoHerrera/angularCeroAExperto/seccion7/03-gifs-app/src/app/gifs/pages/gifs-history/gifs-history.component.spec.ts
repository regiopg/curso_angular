import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsHistoryComponent } from './gifs-history.component';

describe('GifsHistoryComponent', () => {
  let component: GifsHistoryComponent;
  let fixture: ComponentFixture<GifsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifsHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
