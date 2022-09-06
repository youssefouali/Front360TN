import { Component, OnInit } from '@angular/core';
import { KitchenServiceService } from '../_recette_module_services/kitchen-service.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  kitchenProducts:any=[];
  availableRecipes:any=[];

  constructor(private kitchenService:KitchenServiceService) { }

  ngOnInit(): void {
    this.kitchenService.getUserProducts().subscribe(
      res => { this.kitchenProducts = res; }
      )
      this.kitchenService.getAvailableRecipe().subscribe(
        res =>{this.availableRecipes = res ;}
      )

  }


}
