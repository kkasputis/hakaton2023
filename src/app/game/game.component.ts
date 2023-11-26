import { Component } from '@angular/core';
import { Question } from '../question';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})


export class GameComponent {
  
  constructor(private cd: ChangeDetectorRef, private router: Router) {
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
      questionText: 'You are working on your computer at home when the distant sound of explosions and blaring sirens interrupt the usual quiet. What would you do in this situation?',
      answers: [{text : 'Go to check through the window to see what\'s going on.', value: 0, deathText: "You chose the unsafe option and the explosion was so strong that it knocked you over. Your survival journey is over for today.", 
      deathImage: 'assets/1death.jpg' }, {text: 'Hide behind the sofa in the living room.', value: 1, deathText: "Huge explosion right next to your . Shrapnel kills you instantly.", deathImage: 'assets/1death.jpg'} , {text: 'Hide in the bathroom.', value : 2, deathText: "Huge explosion right next to your house. Shrapnel kills you instantly.", deathImage: 'assets/1death.jpg' }]
    },

    {
      number: 3,
      imageLink: 'assets/scene 3 start.jpg',
      questionText: 'The explosions seemed to stop, you see that your house is damaged and it is no longer safe to stay there. What you do next?',
      answers: [{text : 'Stay at home, it\'s dangerous outside', value: 0, deathText: "Defying evacuation, you remained tethered to the crumbling structure. As relentless bombing continued, walls crumbled, turning the shelter into a merciless tomb, sealing your fate in an ill-fated decision. Your journey met a tragic end.", deathImage: 'assets/2death.jpg' }, 
      {text: 'You had prepared essential supply kit ( documents, water, non-perishable food, flashlight, cash, etc.).', value: 2, deathText: "Huge explosion right next to your house. Shrapnel kills you instantly.", deathImage: 'assets/2death.jpg'} , 
      {text: 'Taking my suitcase and bringing all my clothes, photos, apple watch, my favorite mug, etc.', value : 1, deathText: "15 minutes later a rocket hits your apartament. You have died.", deathImage: 'assets/2death.jpg' }]
    }
    // Add more questions here
  ];

  followUpQuestions: Question[] = [
    {
      number: 2,
      imageLink: 'assets/Scene 2 start.jpg',
      questionText: 'Another explosion occurs, shattering your window and now your hand is bleeding. What do you do next?',
      answers: [{text : 'It\'s just a scratch. It will be fine.', value: 0, deathText: "As seconds slipped away, untreated wounds became silent adversaries. Relentless bleeding stained surroundings with life's essence, and infections claimed victory over resilience. Slowly, strength waned, succumbing to unbridled bleeding and infection. Your journey met a tragic end.", deathImage: 'assets/3death.jpg' }, {text: 'The infection could grow, so to prevent that I use band aid to stop the bleeding and cover the wound.', value: 2, deathText: "Soon you start to lose councisness. You have ble to death.", deathImage: 'assets/3death.jpg'}]
    },
    {
      number: 4,
      imageLink: 'assets/Simage1.jpg',
      questionText: 'You reached the bus which would take you to a shelter. The Bus is crowded and has limited space. What do you do with all the stuff that you brought with you?',
      answers: [{text : 'Keep all my stuff and try to make it on my own.', value: 0, deathText: "Walking instead of taking the bus led to tragedy. Perceived as a threat, foreign soldiers misinterpreted your journey. In a disorienting whirlwind, quiet streets transformed into a conflict zone. Unintentionally caught in the crossfire. Your journey met a tragic end.", deathImage: 'assets/4death.jpg'  }, {text: 'Keep the essentials and go with the bus.', value: 2, deathText: "Enemy forces arrived to your location soon and shot you on spot.", deathImage: 'assets/4death.jpg'}]
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
  goToMainPage() {
    this.router.navigate(['/']); 
  }
  
}
