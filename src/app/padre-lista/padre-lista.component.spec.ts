import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreListaComponent } from './padre-lista.component';

describe('PadreListaComponent', () => {
  let component: PadreListaComponent;
  let fixture: ComponentFixture<PadreListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
