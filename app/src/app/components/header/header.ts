import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Search } from '../search/search';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    Search,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
