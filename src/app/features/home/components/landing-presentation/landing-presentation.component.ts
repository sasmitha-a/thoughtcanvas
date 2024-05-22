import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'landing-presentation',
  templateUrl: './landing-presentation.component.html',
  styleUrl: './landing-presentation.component.scss'
})
export class LandingPresentationComponent {

  constructor(private router: Router){}

  redirecToWritingPage(): void {
    this.router.navigate(['/start-writing']);
  }

}
