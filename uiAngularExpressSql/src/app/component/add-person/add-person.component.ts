import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

import * as stateUt from '../../../assets/jsons/IndianStatesAndUT.json';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent implements OnInit {

/*   personName:String;
  personAddress:String;
  personDob:any;
  personEmail:String;
  personGender:String; */

  form:FormGroup;
  states:any;
  constructor(public fb:FormBuilder, private dataService:DataService, private router:Router, private route:ActivatedRoute) { 
    this.form = fb.group({
      "personName": ["",Validators.compose([Validators.minLength(2), Validators.maxLength(30), Validators.required])],
      "personAddress":["",Validators.compose([Validators.minLength(2), Validators.maxLength(30), Validators.required])],
      "personDob":["",Validators.compose([Validators.minLength(2), Validators.maxLength(30), Validators.required])],
      "personEmail":["",Validators.compose([Validators.minLength(3), Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'), Validators.required])],
      "personGender":["",Validators.compose([Validators.required])],
    })
    this.states = (stateUt as any).default;

  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Add Person clicked", this.form.value);

    this.dataService.sendPostRequest(this.form.value)
    
  }

}
