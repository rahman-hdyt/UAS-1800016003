import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BukuAlamatComponent } from './buku-alamat.component';

describe('BukuAlamatComponent', () => {
  let component: BukuAlamatComponent;
  let fixture: ComponentFixture<BukuAlamatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BukuAlamatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BukuAlamatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
