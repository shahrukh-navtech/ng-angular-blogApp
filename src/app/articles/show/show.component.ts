import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

	id: number;
  private sub: any;
  article: any = [];

  constructor(public apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
  	});

  	this.apiService.get_article("articles/"+this.id).subscribe((data) => {
    //console.log(data);
    this.article = [data]
    });
    
	}
}