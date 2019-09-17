import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

  private urlPlaceholder : string = "https://jsonplaceholder.typicode.com";
  private comments = [];
  private idComment : [];

  constructor(private dataService: DataService, private httpClient: HttpClient) {
    this.dataService.get_comments().subscribe((res: any[]) => {
      console.log(res);
      this.comments = res;
    });
  }

  getCommentbody(number: Number){
    this.httpClient.get(this.urlPlaceholder + '/comments?id=' + number).subscribe((res : any) =>{
      console.log(res)
      this.idComment = res;
    });
  }
}
