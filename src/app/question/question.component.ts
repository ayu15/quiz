/**
 * Created by ayush.sharma on 9/28/2016.
 */

import {Component} from '@angular/core';
import * as moment from 'moment/moment';

@Component({
    selector: 'question',
    templateUrl: "./question.component.html"
})
export class QuestionComponent {

    public index:number=0;
    private correctAnswers =0;
    private questionSet: any = [{sNum:1, text:"Which one is correct team name in NBA?", options:["New York Bulls", "Los Angele's Kings", "Golden State timberWolves","Houston Rocket"], answer: "Houston Rocket"},
        {sNum:2, text:"Which of these is a part of MEAN stack", options:["Angular", "React", "jQuery"], answer: "Angular"},
        {sNum:3, text:"which of these is IDE is available for free", options:["VS Code", "WebStorm"], answer: "VS Code"},
        {sNum:4, text:"which of these is mythological warfare game", options:["Age of Empires", "Counter strike"], answer: "Age of Empires"},
        {sNum:5, text:"Michael jordan is famous for which sport", options:["Cricket", "BasketBall", "Football", "other"], answer: "BasketBall"}
    ];

    private nextQuestion(userAnswer:string){
        this.checkAnswer(userAnswer, this.index);
        if(this.index < this.questionSet.length -1){
            ++this.index;
        }
        else{
            this.index = -1;
        }
    }

    private checkAnswer(userAnswer:string, index:number){
        if(userAnswer === this.questionSet[index].answer){
            ++this.correctAnswers;
        }
    }

    private today: string = moment().format('D MMM YYYY');

}