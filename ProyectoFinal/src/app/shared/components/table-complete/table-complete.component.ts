import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from 'src/app/core/models/country';
import { CountryService } from 'src/app/core/services/country.service';
import { NgbdSortableHeader, SortEvent } from '../../directives/sortable.directive';

@Component({
  selector: 'app-table-complete',
  templateUrl: './table-complete.component.html',
  styleUrls: ['./table-complete.component.css']
})
export class TableCompleteComponent implements OnInit {

  countries$: Observable<Country[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;

  constructor(public service: CountryService) {
    this.countries$ = service.countries$;
    this.total$ = service.total$;
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    /*this.service.sortColumn = column;
    this.service.sortDirection = direction;*/
  }

  ngOnInit(): void {
  }

}
