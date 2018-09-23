import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ApplicationComponent } from './application/application.component';
// import { Article } from './Articles.services';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ApplicationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
