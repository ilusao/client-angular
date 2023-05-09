import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAngularComponent } from './client-angular.component';

describe('ClientAngularComponent', () => {
  let component: ClientAngularComponent;
  let fixture: ComponentFixture<ClientAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
