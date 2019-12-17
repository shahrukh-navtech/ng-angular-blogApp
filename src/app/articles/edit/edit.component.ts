import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material';
import { MatOptionModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

	id: number;
  private sub: any;

  article: any = [];

  constructor(public apiService: ApiService, private route: ActivatedRoute, private flashMessage: FlashMessagesService) { }

  ngOnInit() {

	  this.sub = this.route.params.subscribe(params => {
	      this.id = +params['id'];
	  });

	  this.apiService.get_article("articles/"+this.id).subscribe((data) => {
	    console.log(data);
	    this.article = data
	  });

	  console.log(this.article)

  }

  onSubmit() {
    // console.log("Test")
    // alert("Thanks for submitting! Data: " + JSON.stringify(this.article));
    this.apiService.put_article_save("articles/"+this.id, this.article).subscribe((data) => {
      console.log(data);
    });
    this.showFlash_destroy_article();
  }

  showFlash_destroy_article() {
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.
    this.flashMessage.show('Article Updated', { cssClass: 'alert-success', timeout: 3000 });
  }
}
