import { ChangeDetectorRef, Component, Input } from '@angular/core';

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
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent {
  @Input() retry: Function = () => {
  
  };
  @Input() dead: boolean = false;
  @Input() currentQuestionIndex: number = 0;
  @Input() currentQuestion: Question = {number: 0, imageLink: '', questionText: '', answers: [] };
  @Input() selectAnswer: Function = () => {};;
  @Input() nextQuestion: Function = () => {};;
  @Input() selectedAnswer: number = -1;
  constructor(private cd: ChangeDetectorRef) {
    // ...
  }
}
