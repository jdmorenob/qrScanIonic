import { Component } from '@angular/core';
import { HomePage, GuardadosPage } from '../index.paginas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root:any = HomePage;
  tab2Root:any = GuardadosPage;

  constructor() {

  }
}
