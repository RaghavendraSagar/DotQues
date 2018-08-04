import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  
  articleList : Article[];

  constructor() { }

  ngOnInit() {
  }

}
