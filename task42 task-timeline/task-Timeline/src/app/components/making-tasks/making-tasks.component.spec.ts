import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakingTasksComponent } from './making-tasks.component';

describe('MakingTasksComponent', () => {
  let component: MakingTasksComponent;
  let fixture: ComponentFixture<MakingTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MakingTasksComponent]
    });
    fixture = TestBed.createComponent(MakingTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
