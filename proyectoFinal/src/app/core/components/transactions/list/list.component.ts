import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Transaction } from 'src/app/core/models/transaction';
import { BudgetService } from 'src/app/core/services/budget.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  closeResult?: string;
  transactionId = '';
  modal?: NgbModalRef;

  transaction?: Transaction[];

  categoryId = '';

  /*categories: Category[] = [
    {
      nombre: '',
      tipo: '',
      descripcion: ''
    }
  ];*/


  constructor(private budgetService: BudgetService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllTransactions();
    this.budgetService.size();
  }

  getAllTransactions() {
    this.budgetService.getAll().subscribe(res => {
      this.transaction = res;
    })
  }

  async deleteTransaction(transactionId: string) {
    this.budgetService.delete(transactionId);
    //console.log(categoryId);
    this.getAllTransactions();
    this.modalService.dismissAll();
  }

  openVerticallyCentered(content: any, transactionId: any) {
    this.modal = this.modalService.open(content, { centered: true });
    this.transactionId = transactionId;
  }

}
