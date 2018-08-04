import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model'
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  ckeditorContent: string = '<p>Some html</p>';
  articleList : Article[];

  
  constructor() { }

  ngOnInit() {
  }

}
