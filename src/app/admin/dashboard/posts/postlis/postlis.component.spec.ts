import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostlisComponent } from './postlis.component';

describe('PostlisComponent', () => {
  let component: PostlisComponent;
  let fixture: ComponentFixture<PostlisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostlisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostlisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
