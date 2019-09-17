import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent{

  private urlPlaceholder : string = "https://jsonplaceholder.typicode.com";
  posts = [];

  constructor(private httpClient: HttpClient) { }

  getPosts(){
    this.httpClient.get(this.urlPlaceholder + '/posts').subscribe((res : any[]) =>{
      console.log(res)
      this.posts = res;
    });
  }

}
