import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() mostrar:boolean = false;

  toggle () {
    this.mostrar = !this.mostrar;
  }
  constructor() { }

  ngOnInit(): void {
    console.log("mostrar",this.mostrar);
  }

}
