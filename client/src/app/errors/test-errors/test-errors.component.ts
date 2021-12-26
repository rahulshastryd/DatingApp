import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {
  baseUrl = "https://localhost:44344/api/";
  validationErrors:string[]=[];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  get404Error(){
    this.http.get(this.baseUrl + 'Buggy/not-found').subscribe(response =>
      {
        console.warn(response);
      },error=>{
        console.warn(error);
      })
  }

  get400Error(){
    this.http.get(this.baseUrl + 'Buggy/bad-requet').subscribe(response =>
      {
        console.warn(response);
      },error=>{
        console.warn(error);
      })
  }

  get500Error(){
    this.http.get(this.baseUrl + 'Buggy/server-error').subscribe(response =>
      {
        console.warn(response);
      },error=>{
        console.warn(error);
      })
  }
  get401Error(){
    this.http.get(this.baseUrl + 'Buggy/auth').subscribe(response =>
      {
        console.warn(response);
      },error=>{
        console.warn(error);
      })
  }

  get400ValidationError(){
    this.http.post(this.baseUrl + 'account/register',{}).subscribe(response =>
      {
        console.warn(response);
      },error=>{
        console.warn(error);
        this.validationErrors = error;
      })
  }

}
