import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionCard } from 'src/app/shared/model/action-card';
import { PageService } from 'src/app/shared/service/page.service';

@Component({
  selector: 'app-actions-employe',
  templateUrl: './actions-employe.component.html',
  styleUrls: ['./actions-employe.component.scss']
})
export class ActionsEmployeComponent implements OnInit {

  constructor(private router: Router, public pageService: PageService) { }

  ngOnInit(): void {
  }

  goTo(url: String) {
    this.router.navigate([url]);
  }

  getListActions(): ActionCard[] {
    return [{
      style: "card-action card-action-lead fast-action",
      icon: "bx bx-plus-medical",
      url: "dashboard/actionsEmploye",
      title: "Adicionar",
      pageTarget: "Adicionar",
      color: "purple",
    },
    {
      style: "card-action card-action-orange fast-action",
      icon: "bx bx-search-alt-2",
      url: "dashboard/listBillings",
      title: "Pesquisar",
      pageTarget: "Pesquisar",
      color: "purple",
    },
    {
      style: "card-action card-action-roxo fast-action",
      icon: "bx bx-edit-alt",
      url: "dashboard/listCompanys",
      title: "Alterar",
      pageTarget: "Alterar",
      color: "purple",
    },
    {
      style: "card-action card-action-cian fast-action",
      icon: "bx bx-trash",
      url: "dashboard/listUsers",
      title: "Deletar",
      pageTarget: "Deletar",
      color: "purple",
    },]
  }

}
