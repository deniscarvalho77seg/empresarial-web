import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Employe } from 'src/app/models/employe';

@Component({
  selector: 'app-list-employe',
  templateUrl: './list-employe.component.html',
  styleUrls: ['./list-employe.component.scss']
})
export class ListEmployeComponent implements OnInit {

  constructor() { }
  listEmploye: Employe[] = [];
  listEmployeFiltered: Employe[] = [];
  searchValue: string = '';
  registering: boolean = false;
  searching: boolean = false;
  modalToggle:boolean = false;
  @ViewChild('modal', { static: true }) modal!: TemplateRef<any>;
  ngOnInit(): void {
    this.loadListEmploye();
  }

  verifyList() {
    this.cleanListEmploye();
    if (!this.searchIsNull()) {
      this.runFilter();
    } else {
      this.pushAllEmployeList();
    }
  }

  runFilter(): void {
    this.listEmploye.forEach(employe => {
      if (this.verifyNameBySrc(employe.name)) {
        this.listEmployeFiltered.push(employe);
      }
    });
  }

  verifyNameBySrc(name: String): Boolean {
    return name.toLowerCase().includes(this.searchValue.toLowerCase())
  }

  searchIsNull(): Boolean {
    return this.searchValue === '';
  }

  pushAllEmployeList(): void {
    this.listEmployeFiltered = this.listEmploye;
  }

  cleanListEmploye(): void {
    this.listEmployeFiltered = [];
  }

  getListEmploye(): Employe[] {
    this.verifyList();
    return this.listEmployeFiltered;
  }

  loadListEmploye() {
    this.listEmploye = [{
      name: 'Denis',
      status: 'active',
    },
    {
      name: 'Leonardo',
      status: 'active',
    },
    {
      name: 'Joana',
      status: 'inactive',
    }]
  }

  checkRegistering(): Boolean {
    return this.registering;
  }

  checkSearching(): boolean {
    return this.searching;
  }

  startRegistering(): void {
    this.registering = true;
  }

  startSearching(): void {
    this.searching = true;
  }

  stopRegistering(): void {
    this.registering = false;
  }
  stopSearching(): void {
    this.searching = false;
  }
  toggleModal() {
    this.modalToggle = !this.modalToggle;
  }
  edit() {
    this.toggleModal();
    console.log("Register");
  }
  delete() {
    console.log("delete");
  }
  acaoPrimaria() {
    console.log("acao");
  }
}
