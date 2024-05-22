import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() isMobile: boolean = false;
  @Output() redirectionOccurrence: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  navOptions: { title: string; path: string }[] = [
    {
      title: 'Home',
      path: 'home'
    },
    {
      title: 'Articles',
      path: 'articles'
    },
    {
      title: 'About Us',
      path: 'about'
    },
    {
      title: 'Contact',
      path: 'contact'
    },
    {
      title: 'Sign In',
      path: 'signin'
    },
    {
      title: 'Sign Up',
      path: 'signup'
    }
  ];

  redirectTo(path: string): void {
    this.redirectionOccurrence.emit(true);
    this.router.navigate([`/${path}`]);
  }
}
