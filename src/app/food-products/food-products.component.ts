import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FoodProductsService } from '../_recette_module_services/food-products.service';

@Component({
  selector: 'app-food-products',
  templateUrl: './food-products.component.html',
  styleUrls: ['./food-products.component.css']
})
export class FoodProductsComponent implements OnInit {
  foodProducts: any = [];
  public form = new FormGroup({
    name: new FormControl(''),
    foodType: new FormControl(''),
    nutrition: new FormGroup({
      density: new FormControl(''),
      kcal: new FormControl(''),
      fat: new FormControl(''),
      carbs: new FormControl(''),
      protein: new FormControl(''),
    })
  })
  constructor(private foodProductService: FoodProductsService ,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.foodProductService.getFoodProducts()
      .subscribe(res => { this.foodProducts = res; })
  }
  onSubmit(): void {
    const { name,
      foodType,nutrition } = this.form.value;
    this.foodProductService.addFoodProduct(name,
      foodType,
      nutrition).subscribe(
        data => {
          console.log(data);
        }
      )
  }
  deleteFoodProduct(id:any):void{
    this.foodProductService.deleteFoodProduct(id).subscribe( data => {
      console.log(data);
      this.refresh();
    })
  }
  refresh(): void {
    window.location.reload();
}



}
