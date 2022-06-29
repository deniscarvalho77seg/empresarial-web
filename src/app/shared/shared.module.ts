import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { MenuComponent } from './menu/menu.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ModalComponent } from './modal/modal.component';
import { TitlePageComponent } from './title-page/title-page.component';

@NgModule({
  declarations: [
    CardComponent,
    ButtonComponent,
    MenuComponent,
    SearchbarComponent,
    ModalComponent,
    TitlePageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MenuComponent, ModalComponent, CardComponent, TitlePageComponent]
})
export class SharedModule { }
