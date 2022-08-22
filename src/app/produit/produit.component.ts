import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  public productList : any ;
  public filterSouscategorie : any;
  searchKey:string ="";
  constructor(private api : ApiService, private cartService: CartserviceService) { }

  ngOnInit(): void {
    this.api.getMemeCat()
    .subscribe(res=>{
      this.productList = res;
      this.filterSouscategorie = res;

      console.log(this.productList)
    });
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(souscategorie:string){
    this.filterSouscategorie = this.productList
    .filter((a:any)=>{
      if(a.souscategorie == souscategorie ){
        return a;
      }
    })
  }
}
