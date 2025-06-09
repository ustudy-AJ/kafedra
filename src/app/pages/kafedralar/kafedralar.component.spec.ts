import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KafedralarComponent } from './kafedralar.component';

describe('KafedralarComponent', () => {
  let component: KafedralarComponent;
  let fixture: ComponentFixture<KafedralarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KafedralarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KafedralarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
