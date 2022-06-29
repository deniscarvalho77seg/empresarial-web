import { Component, OnInit } from '@angular/core';
import { ActionCard } from 'src/app/shared/model/action-card';
import { PageService } from 'src/app/shared/service/page.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  actionsMenuList: ActionCard[] = [];
  constructor(public pageService: PageService) { }

  ngOnInit(): void {
  }

  getListActions(): ActionCard[] {
    return [{
      style: "card-action card-action-lead fast-action",
      icon: "bx bxs-user-badge bx-border",
      url: "dashboard/actionsEmploye",
      title: "Funcionário",
      pageTarget: "Funcionário",
      color: "purple",
    },
    {
      style: "card-action card-action-orange fast-action",
      icon: "bx bx-bar-chart-square  bx-border",
      url: "dashboard/listBillings",
      title: "Faturamento",
      pageTarget: "Faturamento",
      color: "purple",
    },
    {
      style: "card-action card-action-roxo fast-action",
      icon: "bx bx-buildings bx-border",
      url: "dashboard/listCompanys",
      title: "Empresas",
      pageTarget: "Empresas",
      color: "purple",
    },
    {
      style: "card-action card-action-cian fast-action",
      icon: "bx bx-user bx-border",
      url: "dashboard/listUsers",
      title: "Usuarios",
      pageTarget: "Usuarios",
      color: "purple",
    },]
  }

}