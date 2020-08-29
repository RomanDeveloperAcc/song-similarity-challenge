import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsListItemComponent } from './songs-list-item.component';

describe('SongsListItemComponent', () => {
  let component: SongsListItemComponent;
  let fixture: ComponentFixture<SongsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
