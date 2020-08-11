import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewMachineComponent } from './new-machine.component';

describe('NewMachineComponent', () => {
  let component: NewMachineComponent;
  let fixture: ComponentFixture<NewMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMachineComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
