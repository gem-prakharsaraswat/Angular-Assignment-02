import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelComponentComponent } from './model-component.component';

describe('ModelComponentComponent', () => {
  let component: ModelComponentComponent;
  let fixture: ComponentFixture<ModelComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelComponentComponent]
    });
    fixture = TestBed.createComponent(ModelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
