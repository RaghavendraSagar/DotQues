import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './user/home/home.component';
import { Login } from './admin/models/login.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ArticleComponent } from './admin/article/article.component';
import { CKEditorModule } from 'ng2-ckeditor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CKEditorModule
  ],
  providers: [Login],
  bootstrap: [AppComponent]
})
export class AppModule { }
