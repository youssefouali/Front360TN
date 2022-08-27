import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const API_URL = 'http://localhost:8080/api/recipe/'
@Injectable({
  providedIn: 'root'
})
export class RecipeService {


  public recipesList = new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) { }

  getRecipes(){
    return this.http.get(API_URL+'getAll');
  }
  approveRecipe(){
    return this.http.get(API_URL+'approveRecipe');
  }


}
