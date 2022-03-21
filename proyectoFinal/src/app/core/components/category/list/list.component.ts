import { Component, OnInit, PipeTransform, ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/core/services/category.service';
import { map } from 'rxjs/operators';
import { Category } from 'src/app/core/models/category';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {

  closeResult?: string;
  categoryId = '';
  modal?: NgbModalRef;

  category?: Category[];

  categories: Category[] = [
    {
      nombre: '',
      tipo: '',
      descripcion: ''
    }
  ];


  constructor(private categoryService: CategoryService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllCategory();
    this.categoryService.size();
  }


  getAllCategory() {
    this.categoryService.getAll().subscribe(res => {
      this.category = res;
    })
  }

  async deleteCategory(categoryId: string) {
    this.categoryService.delete(categoryId);
    //console.log(categoryId);
    this.getAllCategory();
    this.modalService.dismissAll();
  }

  openVerticallyCentered(content: any, categoryId: any) {
    this.modal = this.modalService.open(content, { centered: true });
    this.categoryId = categoryId;
  }



}
