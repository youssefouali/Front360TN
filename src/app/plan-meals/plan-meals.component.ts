import { Component, OnInit } from '@angular/core';
import { PlansService } from '../_recette_module_services/plans.service';

@Component({
  selector: 'app-plan-meals',
  templateUrl: './plan-meals.component.html',
  styleUrls: ['./plan-meals.component.css']
})
export class PlanMealsComponent implements OnInit {

  listOfPlans : any = [];
  constructor(private planService:PlansService) { }

  ngOnInit(): void {

    this.planService.getAllUserPlans()
      .subscribe(res => { this.listOfPlans = res; })

  }




}
