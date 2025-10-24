import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog',
  imports: [CommonModule],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog {
  protected menuOpen = false;
  protected selectedCategory: string = 'Celulares';

  constructor() {}

  protected toggleMenu(event: Event): void {
    event.preventDefault();
    this.menuOpen = !this.menuOpen;
  }

  protected openMenu(): void {
    this.menuOpen = true;
  }

  protected closeMenu(): void {
    this.menuOpen = false;
  }

  protected selectCategory(name: string): void {
    this.selectedCategory = name;
  }
}
