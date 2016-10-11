/**
 * Created by ayush.sharma on 9/29/2016.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChartComponent} from "./chart/chart.component";
import {QuestionComponent} from "./question/question.component";
import {AppComponent} from "./app.component";
import {ReportComponent} from "./report/report.component";
//import {Ng2ChartComponent} from "./ng2-chart/ng2-chart.component";

const appRoutes: Routes = [
    { path: 'report', component:ReportComponent  },
    { path: '', component: QuestionComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
