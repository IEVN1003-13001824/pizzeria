import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemhComponent } from './temh.component';

describe('TemhComponent', () => {
  let component: TemhComponent;
  let fixture: ComponentFixture<TemhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemhComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
