import { ArticleService } from './../article.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  // providers: [Article],
})
export class ArticleComponent implements OnInit {

  @Input() article: ArticleService;
    // {title: 'Full Stack', link: 'fullstack.io', points: 2}

  constructor() {
    // this.article = [
    //   new Article('Angular 2', 'angular.io', 3),
    //   new Article('Fullstack', 'fullstack.io')
    // ];
   }

  ngOnInit() {
  }
  voteUp(): boolean {
    this.article.upVote();
    return false;

  }
  voteDown(): boolean {
    if (this.article.points > 0 ) {
      this.article.downVote(); }
    return false;
  }

}
