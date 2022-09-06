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

  approveRecipe(id:any):void{
    this.recipeService.approveRecipe(id).subscribe(
      data => {console.log(data);
        this.refresh();
       }

    )
  }
  rejectRecipe(id:any): void{
    this.recipeService.rejectRecipe(id).subscribe(
      data => {console.log(data);

       }
       )
  }


  refresh(): void {
    window.location.reload();
}



}
