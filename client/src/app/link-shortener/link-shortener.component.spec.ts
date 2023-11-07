import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkShortenerComponent } from './link-shortener.component';

describe('LinkShortenerComponent', () => {
  let component: LinkShortenerComponent;
  let fixture: ComponentFixture<LinkShortenerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkShortenerComponent]
    });
    fixture = TestBed.createComponent(LinkShortenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
