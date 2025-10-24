import { Component, computed } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Products } from '../../services/products';
import { httpResource } from '@angular/common/http';
import { BASEURL } from '../../core/http/url';
import { Product } from '../../types/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  constructor(private readonly products: Products, private readonly router: Router) {}

  refResource = httpResource<Product[]>(() => {
    return `${BASEURL}/products`;
  });

  productsData = computed<Product[]>(() => this.refResource.value() || []);

  protected viewDetail(productId: number) {
    this.router.navigate(['/details-view'], {
      state: { productId: productId, userExists: false },
    });
  }
}
