import { Component, OnInit, Output } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
})
export class ApplicationComponent implements OnInit {
  new_article: ArticleService[] = [] ;


  constructor() {
    this.new_article.push(new ArticleService('Angular 6', 'angular.io', 3));
    this.new_article.push(new ArticleService('Bootstrap 3', 'getbootstrap.com', 1));
   }

  ngOnInit() {
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    // console.log('clicked');
    // alert(link.value);
    this.new_article.push(new ArticleService(title.value , link.value));
    // alert(this.new_article);
    return false;



  }

}
