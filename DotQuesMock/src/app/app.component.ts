import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  rows = [
    { 
      name: 'how to determine phone number line type',
      desc:'This topic will describe you how to determine phone number line type' ,
      totalViews:7
    },
    { 
      name: 'Invalid object name Clients' ,
      desc:'In this article, you will learn about solving the problem which is caused due to missing of clients table in SQL server.' ,
      totalViews:5
    },
    { name: 'No templates matched the input template name is4ef',
      desc:'when you work with identityserver4 you will create templates using commands...' ,
      totalViews:15
    },
    { name: 'Fluent validations not working after adding in separate class library' ,
      desc:'1This article will explain you how to make your fluent validation to work properly even after adding in separate class library.', 
      totalViews:20
    },
    { name: 'could not parse the json file error at line number asp core appsettings',
      desc:'This article will explain you how to resolve "could not parse the json file error at line number "' ,
      totalViews:25
    }
   
  ];
  columns = [
    { prop: 'name' }
  ];
}
