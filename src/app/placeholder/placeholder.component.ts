import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent{

  private urlPlaceholder : string = "https://jsonplaceholder.typicode.com";
  private posts = [];
  private id : [];

  constructor(private dataService: DataService, private httpClient: HttpClient) {
    this.dataService.get_posts().subscribe((res: any[]) => {
      console.log(res);
      this.posts = res;
    });
    
  }

  getPostBody(number: Number){
    this.httpClient.get(this.urlPlaceholder + '/posts?id=' + number).subscribe((res : any) =>{
      console.log(res)
      this.id = res;
    });
  }

}
