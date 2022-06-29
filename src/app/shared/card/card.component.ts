import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from '../service/page.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() listClass: String = "card-action fast-action";
  @Input() icon: String = "";
  @Input() url: String = "";
  @Input() title: String = "";
  @Input() pageTarget: String = "";
  @Input() color: String = "";
  constructor(private router: Router, public pageService: PageService) { }

  ngOnInit(): void {
  }

  goTo() {
    this.pageService.actualPageTitle = this.pageTarget;
    this.router.navigate([this.url]);
  }

  getStyle():String {
    return this.listClass + ' ' + this.color;
  }

}
