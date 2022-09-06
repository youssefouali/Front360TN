import { Component, OnInit } from '@angular/core';
import { PlansService } from '../_recette_module_services/plans.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  nowDate = new Date();
  today = new Date(this.nowDate.getFullYear(),this.nowDate.getMonth(),this.nowDate.getDate(),0,0,0,0)

 upcomingPlans:any=[];
 previousPlans:any=[];



  constructor(private planService:PlansService) { }

  ngOnInit(): void {

    this.planService.getUserUpcomingPlans()
      .subscribe(res => { this.upcomingPlans = res; })

      this.planService.getUserPreviousPlans()
      .subscribe(res => { this.previousPlans = res; })


  }




}
