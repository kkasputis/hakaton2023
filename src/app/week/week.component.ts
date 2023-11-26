import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent {
  constructor(private router: Router) {}
  
  goToGamePage() {
    this.router.navigate(['/game']); 
  }

  goToMainPage() {
    this.router.navigate(['/']); 
  }
}
