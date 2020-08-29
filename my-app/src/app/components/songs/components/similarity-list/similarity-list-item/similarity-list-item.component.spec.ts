import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarityListItemComponent } from './similarity-list-item.component';

describe('SimilarityListItemComponent', () => {
  let component: SimilarityListItemComponent;
  let fixture: ComponentFixture<SimilarityListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarityListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarityListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
