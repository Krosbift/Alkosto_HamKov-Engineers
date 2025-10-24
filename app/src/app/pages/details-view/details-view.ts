import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details-view',
  imports: [CommonModule, FormsModule],
  templateUrl: './details-view.html',
  styleUrl: './details-view.scss'
})
export class DetailsView {
  // Usar las imágenes que agregaste en app/public/img — angular.json copia la carpeta public al root,
  // por eso las rutas públicas son /img/...
  protected mainImage: string = '/img/cel_honorgran1.png';
  protected thumbnails: string[] = [
    '/img/cel_honorgran1.png',
    '/img/cel_honorgran2.png',
    '/img/cel_honorgran3.png',
    '/img/cel_honorgran4.png',
    '/img/cel_honorgran5.png',
    '/img/cel_honorgran6.png'
  ];

  protected selectedCapacity: string = '512 GB';
  protected selectedColor: string = 'purpura';
  protected quantity: number = 1;

  protected selectImage(src: string) {
    this.mainImage = src;
  }

  protected prevImage() {
    const idx = this.thumbnails.indexOf(this.mainImage);
    const nextIdx = idx <= 0 ? this.thumbnails.length - 1 : idx - 1;
    this.mainImage = this.thumbnails[nextIdx];
  }

  protected nextImage() {
    const idx = this.thumbnails.indexOf(this.mainImage);
    const nextIdx = idx === -1 || idx >= this.thumbnails.length - 1 ? 0 : idx + 1;
    this.mainImage = this.thumbnails[nextIdx];
  }

  protected selectCapacity(cap: string) {
    this.selectedCapacity = cap;
  }

  protected selectColor(color: string) {
    this.selectedColor = color;
  }

  protected addToCart() {
    // Implementar integración real con carrito. Por ahora logueamos en consola.
    console.log('Agregar al carrito', {
      image: this.mainImage,
      capacity: this.selectedCapacity,
      color: this.selectedColor,
      quantity: this.quantity
    });
    alert('Producto añadido al carrito (simulado)');
  }
}
