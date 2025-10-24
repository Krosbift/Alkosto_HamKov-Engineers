import { Component, computed } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { httpResource } from '@angular/common/http';
import { BASEURL } from '../../core/http/url';
import { Brand } from '../../types/brands';
import { Product } from '../../types/products';

@Component({
  selector: 'app-search-view',
  imports: [CommonModule, FormsModule, CurrencyPipe],
  templateUrl: './search-view.html',
  styleUrl: './search-view.scss',
})
export class SearchView {
  protected brandQuery: string = '';

  protected refBrands = httpResource<Brand[]>(() => {
    return `${BASEURL}/products/brands`;
  });
  protected brands = computed<string[]>(
    () => this.refBrands.value()?.map((res) => res.nombre) || []
  );

  protected selectedBrands = new Set<string>();
  protected brandsCount: Record<string, number> = {
    APPLE: 137,
    ARGOM: 2,
    BACKBONE: 2,
    BELKIN: 1,
    DJI: 2,
    HONOR: 29,
    HUAWEI: 16,
    I2GO: 5,
    INFINIX: 11,
    KALLEY: 12,
  };

  protected visibleCount = 25;
  protected totalCount = 581;
  protected query: string = 'celulares';
  protected sortBy: string = 'relevance';

  protected categoryFinded: number = 0;
  protected brandFinded: number = 0;
  protected productName: string = '';

  refProductsFilter = httpResource<Product[]>(() => {
    let extraParams: string = '';
    let count: number = 0;

    if (this.productName) {
      return `${BASEURL}/products/search?productName=${this.productName}`;
    }

    if (this.categoryFinded) {
      extraParams = extraParams.concat(`?idCategoria=${this.categoryFinded}`);
      count++;
    }

    if (this.brandFinded) {
      extraParams =
        count === 0
          ? extraParams.concat(`?idMarca=${this.brandFinded}`)
          : extraParams.concat(`&idMarca=${this.brandFinded}`);
      count++;
    }

    return `${BASEURL}/products/filtered${extraParams}`;
  });

  productsFilter = computed<Product[]>(() => {
    const data = this.refProductsFilter.value() || [];
    console.log(data);
    return data;
  });

  constructor(private readonly router: Router) {
    const navigation = this.router.currentNavigation();
    if (navigation?.extras?.state) {
      this.categoryFinded = navigation.extras.state['categoryId'] ?? 0;
      this.brandFinded = navigation.extras.state['brandId'] ?? 0;
      this.productName = navigation.extras.state['productName'] ?? '';
    }
  }

  protected filteredBrands(): string[] {
    const q = this.brandQuery.trim().toLowerCase();
    if (!q) return this.brands();
    return this.brands().filter((b) => b.toLowerCase().includes(q));
  }

  protected toggleBrand(brand: string, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) this.selectedBrands.add(brand);
    else this.selectedBrands.delete(brand);
    // En una implementación real, aquí dispararíamos la recarga de resultados
  }

  protected viewDetail(productId: number) {
    this.router.navigate(['/details-view'], {
      state: { productId: productId, userExists: false },
    });
  }
}
