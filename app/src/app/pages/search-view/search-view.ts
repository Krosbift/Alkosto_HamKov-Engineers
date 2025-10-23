import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-view',
  imports: [CommonModule, FormsModule],
  templateUrl: './search-view.html',
  styleUrl: './search-view.scss'
})
export class SearchView {
  protected brandQuery: string = '';
  protected brands: string[] = [
    'APPLE', 'ARGOM', 'BACKBONE', 'BELKIN', 'DJI', 'HONOR', 'HUAWEI', 'I2GO', 'INFINIX', 'KALLEY'
  ];
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
    KALLEY: 12
  };

  protected visibleCount = 25;
  protected totalCount = 581;
  protected query: string = 'celulares';
  protected sortBy: string = 'relevance';

  protected filteredBrands(): string[] {
    const q = this.brandQuery.trim().toLowerCase();
    if (!q) return this.brands;
    return this.brands.filter((b) => b.toLowerCase().includes(q));
  }

  protected toggleBrand(brand: string, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) this.selectedBrands.add(brand);
    else this.selectedBrands.delete(brand);
    // En una implementación real, aquí dispararíamos la recarga de resultados
  }
}
