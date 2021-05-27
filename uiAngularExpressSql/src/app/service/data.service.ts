import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:5000/";

  constructor(private httpCLient:HttpClient) { }

  public sendGetRequest(){
    return this.httpCLient.get(this.REST_API_SERVER+"getAll")
  }

  public sendPostRequest(data){
    console.log("data", data);
    return this.httpCLient.post<any>(this.REST_API_SERVER+"insertPerson",data).subscribe(data => {
        console.log("On Post Resopnse ",data)
    })
  }

}
