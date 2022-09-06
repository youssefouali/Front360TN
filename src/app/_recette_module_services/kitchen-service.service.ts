import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/kitchen/'
@Injectable({
  providedIn: 'root'
})
export class KitchenServiceService {

  constructor(private http:HttpClient) { }

  getUserProducts():Observable<any>{
    return this.http.get(API_URL+'getUserProducts');
  }
  getAvailableRecipe():Observable<any>{
    return this.http.get(API_URL+'getAvailableRecipes');
  }


}
