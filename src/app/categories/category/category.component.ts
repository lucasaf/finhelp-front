import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styles: []
})
export class CategoryComponent implements OnInit {

  constructor(private service: CategoryService) { }

  ngOnInit() {
  }

}
