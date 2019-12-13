import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  API_URL: string = "http://localhost:4000/api/v1/";

  public get(path) {
      var endpoint = this.API_URL + path;
      console.log(endpoint)
      return this.http.get(endpoint);
  }
}
