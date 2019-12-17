import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApiService } from './api.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { ArticlesComponent } from './articles/articles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule } from "@angular/material";
import { ShowComponent } from './articles/show/show.component';
import { MatButtonModule } from '@angular/material/button';
import { EditComponent } from './articles/edit/edit.component';
import { MatCardModule } from '@angular/material';
import { MatOptionModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ArticlesComponent,
    ShowComponent,
    EditComponent
  ],
  imports: [
  	RouterModule.forRoot([
      {
        path: 'articles',
        component: ArticlesComponent
      },
      {
        path: 'articles/show/:id',
        component: ShowComponent
      },
      {
        path: 'articles/edit/:id',
        component: EditComponent
      },
    ]),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
