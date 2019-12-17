import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(public apiService: ApiService, private flashMessage: FlashMessagesService) { }

  articles: any = []
  
  

  ngOnInit() {
    this.get_articles();
  }

  onRowClicked(row) {
    console.log('Show Page clicked: ', row);
  } 

  onDelete(id) {

    console.log(id)
    if(window.confirm('Are sure you want to delete this item ?')){
     this.apiService.destroy_article("articles/"+id).subscribe((data) => {
        console.log(data);

      });
      this.showFlash_destroy_article()
      this.get_articles()
    } 
  }

  showFlash_destroy_article() {
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.
    this.flashMessage.show('Article Destroyed', { cssClass: 'alert-danger', timeout: 3000 });
  }

  get_articles(){
    this.apiService.get_article("articles").subscribe((data) => {
      console.log(data);
      this.articles = data
      });
  }

}
