import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



const API_URL = 'http://localhost:8080/api/plan/'
@Injectable({
  providedIn: 'root'
})
export class PlansService {


  constructor(private http:HttpClient) { }

  getUserUpcomingPlans(): Observable<any>{
     return this.http.get(API_URL+'upcomingUserPlans');
  }
  getUserPreviousPlans(): Observable<any>{
    return this.http.get(API_URL+'previousUserPlans');
 }
 getAllUserPlans():Observable<any>{
  return this.http.get(API_URL+'listOfPlans')
 }
}
