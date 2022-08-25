import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const API_URL = 'http://localhost:8080/api/foodProduct/';
const url = 'http://localhost:8080/api/foodProduct/get';
const urld = 'http://localhost:8080/api/foodProduct/deleteFoodProduct'



@Injectable({
  providedIn: 'root'
})
export class FoodProductsService {

  constructor(private http:HttpClient) { }

  foodProducts :any;

  getFoodProducts():Observable<any>{
    return this.http.get(API_URL+'getAll');
  }
  getFoodProduct(id:any):Observable<any>{
    return this.http.get(`${url}/${id}`);
  }
  addFoodProduct(name:string,foodType:String,nutrition:[]): Observable<any>{

  return this.http.post(API_URL+'addFoodProduct',{name,foodType,nutrition})

  }
  deleteFoodProduct(id:any):Observable<any>{
    return this.http.get(`${urld}?id=${id}`)
  }

}
