export interface Answer {
    text: string;
    value: number; // Numeric value from 0 to 2
    deathText: string;
    deathImage: string;
  }

export class Question {
    questionText: string;
    number: number;
    imageLink: string;
    answers: Answer[];

    // Add any additional properties related to the question
  
    constructor(questionText: string, imageLink: string, answers: Answer[], number: number) {
      this.questionText = questionText;
      this.imageLink = imageLink;
      this.answers = answers;
      this.number = number;
      // Initialize any additional properties here
    }
}
