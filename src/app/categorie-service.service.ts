import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Icategorie } from 'src/assets/categorie';
import {map} from'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategorieServiceService {
  constructor(private http: HttpClient) { }

  getCategories(){
    return this.http.get<any>("/assets/data/categories.json")
    .pipe(map((res:any)=>{
    return res;
    }))
    }
}
