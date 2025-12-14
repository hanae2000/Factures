import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFacturesComponent } from './list-factures.component';

describe('ListFacturesComponent', () => {
  let component: ListFacturesComponent;
  let fixture: ComponentFixture<ListFacturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFacturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
