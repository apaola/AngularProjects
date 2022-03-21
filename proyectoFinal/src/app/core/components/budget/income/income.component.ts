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
  //categ: Category[];

  constructor(public categoryService: CategoryService, public budgetService: BudgetService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.transactionId = this.route.snapshot.params["id"];
    //console.log(this.categoryId);
    //this.loadCategory();
    this.getAllCategory();
  }
  
  getAllCategory() {
    this.categoryService.getAll().subscribe(res => {
      this.category = res;
      let ingresos = this.category.filter(tipo => tipo.tipo === Type.INCOME);
      //console.log(ingresos);
      this.category = ingresos;
    })
  }

  save() {
    if (this.budgetService.form.valid) {
      if (this.transactionId) {
        //console.log('hay id');
        this.budgetService.update(this.transactionId, this.transaction);
      } else {
        this.budgetService.create(this.transaction);
      }
      //this.submitted = true;
      this.router.navigate(['/transactions']);
    } else {
      this.budgetService.form.markAllAsTouched();
    }
  }

}
