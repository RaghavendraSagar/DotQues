import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router'
import { LoginComponent } from './admin/login/login.component'
import { HomeComponent } from './user/home/home.component';
import { ArticleComponent } from './admin/article/article.component'

const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: 'admin', component: LoginComponent },
  { path: 'article', component: ArticleComponent }
];


@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports : [ RouterModule ]
})
export class AppRoutingModule { 
}

