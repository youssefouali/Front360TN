import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-fave-product',
  templateUrl: './fave-product.component.html',
  styleUrls: ['./fave-product.component.css']
})
export class FaveProductComponent implements OnInit {
  public products : any = [];

  constructor( private cartService : CartserviceService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
    })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
}
