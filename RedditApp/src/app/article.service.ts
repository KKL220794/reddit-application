import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  title: string;
  link: string;
  points: number;

  constructor(title: string, link: string, points: number = 0) {
    this.title = title;
    this.link = link;
    this.points = points;
   }

  upVote() {
    this.points = this.points + 1;
  }

  downVote() {
    this.points = this.points - 1;
  }
}
