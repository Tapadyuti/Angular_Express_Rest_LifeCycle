import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ReactiveFormsModule, Validators, FormBuilder, FormGroup  } from '@angular/forms/';
import { AddPersonComponent } from './add-person.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

describe('AddPersonComponent', () => {
  let component: AddPersonComponent;
  let fixture: ComponentFixture<AddPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPersonComponent ],
      imports: [ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers:[DataService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
