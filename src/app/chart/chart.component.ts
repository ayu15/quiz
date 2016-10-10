/**
 * Created by ayush.sharma on 9/28/2016.
 */

import {
    Component, ViewChild, AfterViewInit, Output, Input, OnChanges, SimpleChanges,
    SimpleChange
} from '@angular/core';
import 'chart.js/dist/Chart.js';

@Component({
    selector: 'chart',
    templateUrl: "./chart.component.html",
    styleUrls: ["./chart.component.css"]
})
export class ChartComponent implements AfterViewInit, OnChanges{

    constructor(){
    }

    @ViewChild('myChart') canvas:any;
    @Input() public correct: number;
    public incorrect: number= 5-this.correct;
    private ctx:any;

    private data = {
        labels: [
            "Correct",
            "Incorrect"
        ],
        datasets: [
            {
                data: [this.correct, this.incorrect],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB"
                ]
            }]
    };

    private options = {
        responsive: true
    }

    public setData(correct:number):void{
        this.data = {
            labels: [
                "Correct",
                "Incorrect"
            ],
            datasets: [
                {
                    data: [correct, 5-correct],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB"
                    ]
                }]
        };
    }
    ngAfterViewInit() {
        //this.createResultChart();
        this.drawChart(this.data, this.options);
    }

    ngOnChanges(changes: {[propertyName: string]: SimpleChange}){
        // changes.prop contains the old and the new value...
        for (let propName in changes) {
            let chng = changes[propName];
            let corr = chng.currentValue;
            this.setData(corr);
        }
        this.drawChart(this.data, this.options);
    }

    public hideChart(){
        return false;
    }

    public drawChart (data, options) {
        this.ctx = this.canvas.nativeElement.getContext("2d");

        let myPieChart = new Chart(this.ctx, {
            type: 'pie',
            data: data,
            options: options
        });
    }


}




