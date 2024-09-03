import { ComponentFixture, TestBed } from '@angular/core/testing';

import { todosComponent } from './todos.component';

describe('todosComponent', () => {
  let component: todosComponent;
  let fixture: ComponentFixture<todosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [todosComponent]
    });
    fixture = TestBed.createComponent(todosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
