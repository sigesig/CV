import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isMenuActive = false;

  constructor() { }

  ngOnInit(): void { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const header = document.querySelector('.header') as HTMLElement;
    if (window.scrollY > 250) {
      header.style.backgroundColor = '#29323c';
    } else {
      header.style.backgroundColor = 'rgba(31, 30, 30 , 0.24)';
    }
  }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }
}
