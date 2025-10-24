import { Component } from '@angular/core';
import { Products } from '../../services/products';
import { httpResource } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  constructor(private readonly products: Products) {}

  data = httpResource
}
