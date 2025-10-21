import { Component } from '@angular/core';

@Component({
  selector: 'app-my-account',
  imports: [],
  templateUrl: './my-account.html',
  styleUrl: './my-account.scss'
})
export class MyAccount {
  protected stateMenu: boolean = false;
  protected formError: boolean = false;

  protected openOrCloseMenu() {
    this.stateMenu = !this.stateMenu;
  }
}
