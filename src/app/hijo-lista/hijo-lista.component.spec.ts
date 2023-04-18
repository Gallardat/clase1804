import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoListaComponent } from './hijo-lista.component';

describe('HijoListaComponent', () => {
  let component: HijoListaComponent;
  let fixture: ComponentFixture<HijoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
