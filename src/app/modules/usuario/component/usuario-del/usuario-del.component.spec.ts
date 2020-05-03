import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDelComponent } from './usuario-del.component';

describe('UsuarioDelComponent', () => {
  let component: UsuarioDelComponent;
  let fixture: ComponentFixture<UsuarioDelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioDelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
