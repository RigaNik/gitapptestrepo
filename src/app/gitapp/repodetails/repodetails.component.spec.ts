import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepodetailsComponent } from './repodetails.component';

describe('RepodetailsComponent', () => {
  let component: RepodetailsComponent;
  let fixture: ComponentFixture<RepodetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepodetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
