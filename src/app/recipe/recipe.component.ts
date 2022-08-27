import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../_recette_module_services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipes:any =[];

  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
    this .recipeService.getRecipes().subscribe(
      res => { this.recipes =res;
      console.log(this.recipes);
      }
    )
  }

  approveRecipe():void{
    this.recipeService.approveRecipe().subscribe(
      data => {console.log(data);
       }

    )
  }


  refresh(): void {
    window.location.reload();
}



}
