import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'carbon-components-angular/button';
import { QuestionComponent } from './question/question.component';
import { SubmissionComponent } from './submission/submission.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    SubmissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class QuestionModule { }
