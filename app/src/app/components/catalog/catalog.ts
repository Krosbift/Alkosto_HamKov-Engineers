import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog {
  protected menuOpen = false;

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

  @HostListener('document:click', ['$event'])
  protected onDocumentClick(event: Event): void {
    if (!this.menuOpen) return;
    const target = event.target as Element | null;
    const inside = target && target.closest && target.closest('#tech-dropdown');
    if (!inside) {
      this.menuOpen = false;
    }
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    if (this.menuOpen) {
      this.menuOpen = false;
    }
  }

  ngOnDestroy(): void {
    try {
      document.body.classList.remove('catalog-menu-open');
    } catch (e) {}
  }
}
