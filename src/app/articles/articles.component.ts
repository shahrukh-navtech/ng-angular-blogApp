import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(public apiService: ApiService) { }

  articles: any = []


  ngOnInit() {
  this.apiService.get("articles").subscribe((data) => {
    console.log(data);
    this.articles = data
    });
  }

  onRowClicked(row) {
    console.log('Show Page clicked: ', row);
}

}
