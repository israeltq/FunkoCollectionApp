import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFunkoComponent } from './new-funko.component';

describe('NewFunkoComponent', () => {
  let component: NewFunkoComponent;
  let fixture: ComponentFixture<NewFunkoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFunkoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFunkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
