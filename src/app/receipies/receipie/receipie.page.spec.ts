import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReceipiePage } from './receipie.page';

describe('ReceipiePage', () => {
  let component: ReceipiePage;
  let fixture: ComponentFixture<ReceipiePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceipiePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReceipiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
