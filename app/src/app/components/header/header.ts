import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Search } from '../search/search';
import { Catalog } from '../catalog/catalog';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    Search,
    Catalog,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
