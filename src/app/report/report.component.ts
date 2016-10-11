import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private questionSet: any = [{sNum:1, text:"Which one is correct team name in NBA?", options:["New York Bulls", "Los Angele's Kings", "Golden State timberWolves","Houston Rocket"], answer: "Houston Rocket"},
    {sNum:2, text:"Which of these is a part of MEAN stack", options:["Angular", "React", "jQuery"], answer: "Angular"},
    {sNum:3, text:"which of these is IDE is available for free", options:["VS Code", "WebStorm"], answer: "VS Code"},
    {sNum:4, text:"which of these is mythological warfare game", options:["Age of Empires", "Counter strike"], answer: "Age of Empires"},
    {sNum:5, text:"Michael jordan is famous for which sport", options:["Cricket", "BasketBall", "Football", "other"], answer: "BasketBall"}
  ];

  private userAnswers:any = [];

  public setUserAnswers(userAnswers:any){
    this.userAnswers = userAnswers;
  }
}
