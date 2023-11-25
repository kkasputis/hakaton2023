import { Component } from '@angular/core';
import { Question } from './question';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  constructor(private cd: ChangeDetectorRef) {
    // ...
  }

  currentQuestionIndex: number = 0;
  selectedAnswer: number = -1;
  followUpQuestion: boolean = false;
  submitted: boolean = false;
  dead: boolean = false;
  showDead: string = 'no';
  success: boolean = false;
  started: boolean = false;
  imageLink2: string = 'assets/start.jpg';
  deathText: string = '';
  deathImage: string = 'assets/0Death.jpg';

  questions: Question[] = [
    {
      number: 1,
      imageLink: 'assets/1.jpg',
      questionText: 'You are working on your computer at home when the distant sounds of explosions and blaring sirens interrupted usual quiet. What would you do in such situation?',
      answers: [{text : 'Go to check through the window to see what\'s going on.', value: 0, deathText: "Huge explosion right next to your house. Shrapnel kills you instantly.", deathImage: 'assets/1death.jpg' }, {text: 'Hide behind the sofa in the living room.', value: 1, deathText: "Huge explosion right next to your house. Shrapnel kills you instantly.", deathImage: 'assets/1death.jpg'} , {text: 'Hide in the bathroom.', value : 2, deathText: "Huge explosion right next to your house. Shrapnel kills you instantly.", deathImage: 'assets/1death.jpg' }]
    },

    {
      number: 3,
      imageLink: 'assets/scene 3 start.jpg',
      questionText: 'The bombing seemed to stop, you see that your house is damaged and you cannot longer stay there. What you do next?',
      answers: [{text : 'Deciding to stay at home', value: 0, deathText: "15 minutes later a rocket hits your apartament. You have died.", deathImage: 'assets/2death.jpg' }, {text: 'You had prepared essential supply kit ( documents, water, non-perishable food, flashlight, cash, etc.).', value: 2, deathText: "Huge explosion right next to your house. Shrapnel kills you instantly.", deathImage: 'assets/2death.jpg'} , {text: 'Taking my suitcase and bringing all my clothes, photos, apple watch, my favorite mug, etc.', value : 1, deathText: "15 minutes later a rocket hits your apartament. You have died.", deathImage: 'assets/2death.jpg' }]
    }
    // Add more questions here
  ];

  followUpQuestions: Question[] = [
    {
      number: 2,
      imageLink: 'assets/Scene 2 start.jpg',
      questionText: 'The explosion was substantial, shattering your window, and now your hand is bleeding. What you do next?',
      answers: [{text : 'A little bleeding  do not hurt anyone. It will be fine.', value: 0, deathText: "Soon you start to lose councisness. You have ble to death.", deathImage: 'assets/3death.jpg' }, {text: 'The infection could grow, so to prevent that I use band aid to stop the bleeding and cover the wound.', value: 2, deathText: "Soon you start to lose councisness. You have ble to death.", deathImage: 'assets/3death.jpg'}]
    },
    {
      number: 4,
      imageLink: 'assets/Simage1.jpg',
      questionText: 'You reached the bus which would take you to the shelter. The Bus is crowded and have limited space. What do you do with all the stuff that you brought with you?',
      answers: [{text : 'Keep all my stuff and try to make it on my own.', value: 0, deathText: "Enemy forces arrived to your location soon and shot you on spot.", deathImage: 'assets/4death.jpg'  }, {text: 'Keep the essentials and go with the bus.', value: 2, deathText: "Enemy forces arrived to your location soon and shot you on spot.", deathImage: 'assets/4death.jpg'}]
    }
    
    // Add more questions here
  ];


  selectAnswer(answer: any): void {
    console.log(answer);
    this.selectedAnswer = answer.value;
    this.deathImage = answer.deathImage;
    this.deathText = answer.deathText;
  }

  nextQuestion(): void {
    if (this.selectedAnswer === 0) {
      this.showDead = 'yes';
      this.dead = true;
    }
    else if (this.selectedAnswer === 1) {
      this.followUpQuestion = true;
      this.imageLink2 = 'assets/' + this.currentQuestionIndex + '.jpg'
      console.log(this.followUpQuestion);
      this.selectedAnswer = -1;
    }
    else if ((this.currentQuestionIndex < this.questions.length - 1) && (this.selectedAnswer == 2)) {
    
      this.imageLink2 = 'assets/' + 1 + this.currentQuestionIndex + this.followUpQuestion + '.jpg';
      
      this.followUpQuestion = false;
      // this.imageLink2 = 'assets/2.jpg'
      this.currentQuestionIndex++;
      this.selectedAnswer = -1;
    } 
    
    else {
      this.success = true;
    }
  }
  retry(): void {
    this.showDead = 'no';
    this.dead = false;
    this.currentQuestionIndex = 0;
    this.selectedAnswer= -1;
    this.followUpQuestion = false;
    this.cd.markForCheck();
    this.imageLink2 = 'assets/start.jpg';
  }

  goToStart(): void {
    this.retry();
    this.success = false;
    this.started = false;
  }
  
}
