import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinishRecordComponent } from './finish-record.component';

describe('FinishRecordComponent', () => {
  let component: FinishRecordComponent;
  let fixture: ComponentFixture<FinishRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishRecordComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinishRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
