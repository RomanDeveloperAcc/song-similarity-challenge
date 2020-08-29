import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarityListComponent } from './similarity-list.component';

describe('SimilarityListComponent', () => {
  let component: SimilarityListComponent;
  let fixture: ComponentFixture<SimilarityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
