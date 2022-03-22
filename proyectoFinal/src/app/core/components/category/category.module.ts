import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ManageComponent } from './manage/manage.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableFilterPipe } from './list/table-filter.pipe';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'manage',
    component: ManageComponent
  },
  {
    path: 'manage/:id',
    component: ManageComponent
  },
  {
    path: '**',
    redirectTo: 'lists'
  }
]

@NgModule({
  declarations: [
    ListComponent,
    ManageComponent,
    TableFilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CategoryModule { }
