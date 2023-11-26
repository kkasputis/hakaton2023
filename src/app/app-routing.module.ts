import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmissionComponent } from './submission/submission.component';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { WeekComponent } from './week/week.component';

const routes: Routes = [
  { path: '', component: SubmissionComponent }, // Define routes with their corresponding components
  { path: 'game', component: GameComponent },
  { path: 'week', component: WeekComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
