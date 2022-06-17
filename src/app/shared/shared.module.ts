import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { MenuComponent } from './menu/menu.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

@NgModule({
  declarations: [
    CardComponent,
    ButtonComponent,
    MenuComponent,
    SearchbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MenuComponent]
})
export class SharedModule { }
