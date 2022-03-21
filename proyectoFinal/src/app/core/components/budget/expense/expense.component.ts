import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/category';
import { Transaction } from 'src/app/core/models/transaction';
import { Type } from 'src/app/core/models/type';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  public types = Type;

  category?: Category[];

  transactionId = '';
  transaction: Transaction = {
    cantidad: 0,
    fecha: '',
    idCategoria: ''
  };

  constructor(public categoryService: CategoryService) { }

  ngOnInit(): void {
    //this.loadCategory();
  }

  /*async loadCategory() {
    this.categoryService.getCategoryType(this.types.EXPENSE).subscribe(res => {
      this.category = res;
      console.log(this.types.EXPENSE);
      console.log(this.category);
    });*
  }*/

}
