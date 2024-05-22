import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() isMobile: boolean = false;
  @Output() redirectionOccurrence: EventEmitter<boolean> = new EventEmitter<boolean>();
menuOpened:boolean = false;

constructor(private router: Router) {}

  toggleMenu(): void {
    this.menuOpened = !this.menuOpened;
  }

  closeMenu(): void {
    this.menuOpened = false;
  }
  
  redirectTo(path: string): void {
    this.redirectionOccurrence.emit(true);
    this.router.navigate([`/${path}`]);
  }
}
