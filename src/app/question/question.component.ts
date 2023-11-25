import { Component, Input } from '@angular/core';

export interface Answer {
  text: string;
  value: number; // Numeric value from 0 to 2
}

interface Question {
  questionText: string;
  number: number;
  imageLink: string;
  answers: Answer[];
}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
  
})
export class QuestionComponent {
  @Input() currentQuestionIndex: number = 0;
  @Input() currentQuestion: Question = {number: 0, imageLink: '', questionText: '', answers: [] };
  @Input() selectAnswer: Function = () => {};;
  @Input() nextQuestion: Function = () => {};;
  @Input() selectedAnswer: number = -1;
  @Input() imageLink2: string = "assets/1.jpg";



  
}