import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReceipiesPage } from './receipies.page';

describe('ReceipiesPage', () => {
  let component: ReceipiesPage;
  let fixture: ComponentFixture<ReceipiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceipiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReceipiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
