import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValamiComponent } from './valami-component';

describe('ValamiComponent', () => {
  let component: ValamiComponent;
  let fixture: ComponentFixture<ValamiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValamiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ValamiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
