import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router, RouterModule } from '@angular/router';
import { EventComponent } from '../event/event.component';


interface QuizItems {
  questionTW: string;
  questionEN: string;
  options: { content: string, isRight: boolean }[];
}


@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, MatCardModule, MatIconModule, MatListModule, MatRippleModule, RouterModule, EventComponent],
  templateUrl: './quiz.component.html',
  animations: [
    trigger('viewQuizItemAnimation', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter', [animate('300ms ease-in')]),
      transition(':leave', [animate('200ms ease-out')]),
    ]),
    trigger('flashRed', [
      transition(':enter', [
        style({ backgroundColor: 'transparent' }),
        animate('200ms', style({ backgroundColor: 'red' })),
        animate('200ms', style({ backgroundColor: 'transparent' })),
      ]),
    ]),
  ]

})

export class QuizComponent {
  dynamicTitle: string = "Quiz"
  dynamicFooter: string = "Back to Home"

  // Ripple
  rippleColor: string = 'rgba(255, 255, 255, 0.2)';
  radius = 800;

  // checkAnswer
  isOpen: boolean = false;
  isRightText: string = "Congratulations!"
  isRightIcon: string = "task_alt"
  isRightClass: string = "text-green-400 text-[400px]"

  constructor(private router: Router) {} // 注入 Router


  checkAnswer(option: { content: string; isRight: boolean }) {
    if (option.isRight) {
      this.isOpen = true;
      this.isRightText = "Congratulations!";
      this.isRightIcon = "task_alt";
      this.isRightClass = "text-green-400 text-[400px]";
      setTimeout(() => {
        this.isOpen = false;
        this.router.navigate(['/']);
      }, 1000)
    } else {
      console.log('wrong');
      this.isOpen = true;
      this.isRightText = "Try again!";
      this.isRightIcon = "warning";
      this.isRightClass = "text-red-300 text-[400px]";
      setTimeout(() => {
        this.isOpen = false;
      }, 1000)
    }

  }

  questions: QuizItems[] = [{
    questionTW: "T3CO什麼時候開幕？",
    questionEN: "When does T3CO open?",
    options: [
      { content: "May, 2024", isRight: false },
      { content: "Oct, 2024", isRight: true },
      { content: "Jan, 2024", isRight: false }

    ]
  }]




}
