import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Plan } from '../models/plan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  private apiBaseUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getPlans(): Observable<Plan[]>{
    return this.http.get<Plan[]>(`${this.apiBaseUrl}/plan/list`);
  }
}
