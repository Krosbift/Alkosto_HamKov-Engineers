import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [CommonModule],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {
  isOpen = false;
  suggestions: string[] = [
    'Celulares',
    'Televisores',
    'Portátiles',
    'Electrodomésticos',
    'Ofertas del día',
  ];
  popular: string[] = ['lavadoras','celulares','televisores','tablet','estufas','licuadoras','ventiladores','cafeteras','computadores','audifonos'];

  recent = [
    { image: '/img/product1.jpg', title: 'Parlante CHALLENGER SC5 Negro', price: '$119.030' },
    { image: '/img/product2.jpg', title: 'Celular SAMSUNG Galaxy A16 128GB LTE 4G Verde', price: '$539.050' },
    { image: '/img/product3.jpg', title: 'Celular REDMI Note 14 256GB 4G Azul + Audífonos', price: '$949.050' },
  ];

  @ViewChild('searchInput', { static: false }) searchInputRef!: ElementRef<HTMLInputElement>;

  onFocus() {
    this.isOpen = true;
  }

  selectSuggestion(s: string) {
    this.isOpen = false;
    // Put value into input
    if (this.searchInputRef && this.searchInputRef.nativeElement) {
      this.searchInputRef.nativeElement.value = s;
    }
    console.log('Selected suggestion:', s);
  }

  selectPopular(p: string) {
    // behave like selecting a suggestion
    this.selectSuggestion(p);
  }


  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    const form = document.querySelector('.search-form');
    if (!form) return;
    if (!form.contains(target)) {
      this.isOpen = false;
    }
  }
}
