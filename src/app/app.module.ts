import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing,
         appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { ChartComponent } from './chart/chart.component';
import {MaterialModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,routing,
    FormsModule,
    HttpModule, MaterialModule.forRoot()
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
