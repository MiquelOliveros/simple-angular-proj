import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  urlPlaceholder: string = "https://jsonplaceholder.typicode.com";

  constructor(private httpClient: HttpClient) { }

  get_comments() {
    return this.httpClient.get(this.urlPlaceholder + '/comments');
  }

  get_posts(){
    return this.httpClient.get(this.urlPlaceholder + '/posts');
  }
}
