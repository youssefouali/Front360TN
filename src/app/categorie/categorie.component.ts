import { Component, OnInit } from '@angular/core';
import { CategorieServiceService } from '../categorie-service.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  public categories: any;
  constructor( private categorieService: CategorieServiceService) { }

  ngOnInit() {
    this.categorieService.getCategories()
    .subscribe(res=>{
      this.categories=res;
    })
  }

}
