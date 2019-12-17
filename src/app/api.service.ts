import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  API_URL: string = "http://localhost:4000/api/v1/";

  public get_article(path) {
      var endpoint = this.API_URL + path;
      console.log(endpoint)
      return this.http.get(endpoint);
  }

  public put_article_save(path, article){
    var endpoint = this.API_URL + path;
    var body = {
      "title" : article.title,
      "body" : article.body,
      "url" : article.url
    }
    console.log(body)
    return this.http.put(endpoint, body);
  }

  public destroy_article(path) {
    var endpoint = this.API_URL + path;
    return this.http.delete(endpoint);
  }

}
