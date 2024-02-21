import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ProductsElement } from '../models/productElement';



const ELEMENT_DATA: ProductsElement[] = [
  {
    images:"/assets/mango.jpg",
    title:"Chocolate Mousse Torte Cake",
    description:"Two rich, chocolate cake layers are filled with luscious chocolate whipped cream mousse",
    category:"Bakery",
    brand:"Gaston’s Bakery",
    expDate:"05/15/2017",
    mfdDate:"05/10/2017",
    size:"7 inches in diameter",
    price:"42.95",
    stock:"5",
    allegations:
      "Unless otherwise noted, products contain milk, wheat"
  },
  {
    images:"/assets/mango.jpg",
    title:"Chocolate Mousse Torte Cake",
    description:"Two rich, chocolate cake layers are filled with luscious chocolate whipped cream mousse",
    category:"Bakery",
    brand:"Gaston’s Bakery",
    expDate:"05/15/2017",
    mfdDate:"05/10/2017",
    size:"7 inches in diameter",
    price:"42.95",
    stock:"5",
    allegations:
      "Unless otherwise noted, products contain milk, wheat"
  }
];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['images', 'title', 'description', 'category','brand', 'expDate', 'mfdDate','size', 'price', 'stock','allegations'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<ProductsElement>();

}
