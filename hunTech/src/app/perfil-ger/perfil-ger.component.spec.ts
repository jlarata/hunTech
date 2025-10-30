import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilGerComponent } from './perfil-ger.component';

describe('PerfilGerComponent', () => {
  let component: PerfilGerComponent;
  let fixture: ComponentFixture<PerfilGerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilGerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilGerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
