import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewShopComponent } from './new-shop.component';

describe('NewShopComponent', () => {
  let component: NewShopComponent;
  let fixture: ComponentFixture<NewShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewShopComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
