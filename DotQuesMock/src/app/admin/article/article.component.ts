import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators  } from '@angular/forms';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  // ckeditorContent: string = '<p>Some html</p>';
 
  constructor(private fb:FormBuilder) { }

  articleForm = this.fb.group({
      articleID:[''],
      articleTitle:['',Validators.required],
      articleContent:['',Validators.required],
      
  })

  

  ngOnInit() {
  }


  submitArticle(){
    debugger;
    console.log(this.articleForm.value);
    alert('form submitted');
  }
}
