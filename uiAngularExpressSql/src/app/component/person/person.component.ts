import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  title="View All Person"

  tableData:any = [];
  constructor(private dataService:DataService, private router:Router, private route:ActivatedRoute) { }

  

  ngOnInit(): void {

    this.dataService.sendGetRequest().subscribe(data=>{
      console.log("Data : ",data)
      this.tableData = data;
    })

  }

  goToAddPerson(){
    this.router.navigate(["/addPerson"])
  }

}
