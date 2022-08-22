import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {

  public productList : any ;
  public filterSouscategorie : any;
  searchKey:string ="";
  constructor(private api : ApiService,private cartService:CartserviceService ) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterSouscategorie = res;
      this.productList.forEach((a:any) => {
        if((a.souscategorie ==="farine et amidon" || a.souscategorie ==="sucre")||( a.souscategorie ==="chocolat manager"|| a.souscategorie ==="eaux florales")){
        (a.souscategorie ==="lait concentre sucre"|| a.souscategorie ==="levure et bicarbonate")
        }
        Object.assign(a,{quantite:1,total:a.prix});
      });
      console.log(this.productList)
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
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
  addtofave(item:any){
    this.cartService.addtoCart(item);

  }
}
