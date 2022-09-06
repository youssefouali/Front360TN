import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const API_URL = 'http://localhost:8080/api/recipe/'
const urla='http://localhost:8080/api/recipe/approveRecipe'
const urlr='http://localhost:8080/api/recipe/rejectRecipe'
@Injectable({
  providedIn: 'root'
})
export class RecipeService {


  public recipesList = new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) { }

  getRecipes(){
    return this.http.get(API_URL+'getAll');
  }
  approveRecipe(id:any){
    return this.http.get(`${urla}?recipeId=${id}`);
    //{urld}?id=${id}`
  }
  rejectRecipe(id:any){
    return this.http.get(`${urlr}?recipeId=${id}`)
  }


}
