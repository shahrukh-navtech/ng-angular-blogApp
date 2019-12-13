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


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

	id: number;
  private sub: any;


  article: any = [];

  constructor(public apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {

	  this.sub = this.route.params.subscribe(params => {
	      this.id = +params['id'];
	  });

	  this.apiService.get("articles/"+this.id).subscribe((data) => {
	    console.log(data);
	    this.article = data
	  });

	  console.log(this.article)

  }

  onSubmit() {
  console.log("Test")
    alert("Thanks for submitting! Data: " + JSON.stringify(this.article));
  }

}
