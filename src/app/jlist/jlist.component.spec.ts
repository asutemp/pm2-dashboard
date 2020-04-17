import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JlistComponent } from './jlist.component';

describe('JlistComponent', () => {
  let component: JlistComponent;
  let fixture: ComponentFixture<JlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
