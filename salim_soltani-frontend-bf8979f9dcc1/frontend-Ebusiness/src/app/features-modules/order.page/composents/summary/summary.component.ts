import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  id:number;
  name: string;
  img: string;
  price: number;
  description: string;
  checked:boolean
}


const ELEMENT_DATA: PeriodicElement[] = [
  {id:1,img: "https://source.unsplash.com/featured?technology", name: 'produit 1', price: 200.00, description: 'Hfvdsvdvv',checked:true},
  {id:2,img: "https://source.unsplash.com/featured?product", name: 'produit 2', price: 400.00, description: 'Hefvdsvd',checked:false},
  {id:1,img: "https://source.unsplash.com/featured?technology", name: 'produit 1', price: 200.00, description: 'Hfvdsvdvv',checked:true},
  {id:2,img: "https://source.unsplash.com/featured?product", name: 'produit 2', price: 400.00, description: 'Hefvdsvd',checked:false},
  {id:1,img: "https://source.unsplash.com/featured?technology", name: 'produit 1', price: 200.00, description: 'Hfvdsvdvv',checked:true},
  {id:2,img: "https://source.unsplash.com/featured?product", name: 'produit 2', price: 400.00, description: 'Hefvdsvd',checked:false},
  {id:1,img: "https://source.unsplash.com/featured?technology", name: 'produit 1', price: 200.00, description: 'Hfvdsvdvv',checked:true},
  {id:2,img: "https://source.unsplash.com/featured?product", name: 'produit 2', price: 400.00, description: 'Hefvdsvd',checked:false},
  {id:1,img: "https://source.unsplash.com/featured?technology", name: 'produit 1', price: 200.00, description: 'Hfvdsvdvv',checked:true},
  {id:2,img: "https://source.unsplash.com/featured?product", name: 'produit 2', price: 400.00, description: 'Hefvdsvd',checked:false},
];

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  checked:boolean = true;
  displayedColumns: string[] = ['image', 'name', 'price', 'quantity','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor() { }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
  }
  select(){
    this.checked =! this.checked;
      
    }
    quantity:number=1;
   
plus(){
this.quantity++;
}
minus(){
  this.quantity++;
  }
}
