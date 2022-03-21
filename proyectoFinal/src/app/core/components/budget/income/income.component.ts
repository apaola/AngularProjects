import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/services/category.service';
import { Category } from 'src/app/core/models/category';
import { BudgetService } from 'src/app/core/services/budget.service';
import { Transaction } from 'src/app/core/models/transaction';
import { Type } from 'src/app/core/models/type';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

  submitted = false;
  transactionId = '';
  transaction: Transaction = {
    cantidad: 0,
    fecha: '',
    idCategoria: ''
  };
  
  category?: Category[];

  categories: Category = {
    nombre: '',
    tipo: '',
    descripcion: ''
  };

  public types = Type;

  closeResult?: string;

  categoryId = '';

  type = 'Gastos';

  constructor(public categoryService: CategoryService, public budgetService: BudgetService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.transactionId = this.route.snapshot.params["id"];
    //console.log(this.categoryId);
    //this.loadCategory();
    this.loadCategory2();
  }

  /*async loadCategory() {
    this.categoryService.getCategoryType(this.types.INCOME).subscribe(res => {
      this.category = res;
      console.log(this.types.INCOME);
      console.log(this.category);
    });
  }*/

  async loadCategory2() {
    this.categoryService.getCategoryType(this.type).subscribe(res => {
      this.category = res;
      console.log(this.type);
      console.log(this.category);
    });
  }

  async loadCategory() {
    this.categoryService.getCategory(this.type).subscribe(res => {
      this.category = res;
    });
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(res => {
      this.category = res;
    })
  }

}
