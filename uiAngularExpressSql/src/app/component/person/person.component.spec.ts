import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PersonComponent } from './person.component';
import { DataService } from 'src/app/service/data.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PersonComponent', () => {
  let component: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule], 
      declarations: [ PersonComponent ],
      providers: [DataService],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    /* let fixture = TestBed.createComponent(PersonComponent);
    let component = fixture.componentInstance; */
    component = TestBed.get(PersonComponent);
    expect(component).toBeTruthy();
  });
});
