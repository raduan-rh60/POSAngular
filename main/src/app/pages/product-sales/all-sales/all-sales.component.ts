import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MaterialModule } from 'src/app/material.module';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
export interface productsData {
  id: number;
  productId: string;
  imagePath: string;
  pName: string;
  sQuantity: number;
  productPrice: number;
  paidPrice: number;
  duePrice: number;
  customerName: string;
  saleDate: string;
  saleTime: string;
  shopeReferance: string;
}

const ELEMENT_DATA: productsData[] = [
  {
    id: 1,
    productId: 'NPM1234458',
    imagePath: 'assets/images/products/dash-prd-1.jpg',
    pName: 'Minecraf',
    sQuantity: 2,
    productPrice: 1250,
    paidPrice: 2450,
    duePrice: 0,
    customerName: 'Walk In',
    saleDate: '12-10-24',
    saleTime: '12:40 pm',
    shopeReferance: 'shop1',
  },
  {
    id: 2,
    productId: 'NPM1234458',
    imagePath: 'assets/images/products/dash-prd-2.jpg',
    pName: 'Shoe',
    sQuantity: 5,
    productPrice: 1300,
    paidPrice: 2450,
    duePrice: 0,
    customerName: 'Walk In',
    saleDate: '12-10-24',
    saleTime: '12:40 pm',
    shopeReferance: 'shop1',
  },
  {
    id: 3,
    productId: 'NPMSS34458',
    imagePath: 'assets/images/products/dash-prd-3.jpg',
    pName: 'Shirt',
    sQuantity: 7,
    productPrice: 250,
    paidPrice: 750,
    duePrice: 200,
    customerName: 'Walk In',
    saleDate: '12-10-24',
    saleTime: '12:40 pm',
    shopeReferance: 'shop2',
  },
  {
    id: 4,
    productId: 'NPM1267458',
    imagePath: 'assets/images/products/dash-prd-4.jpg',
    pName: 'Foot Ball',
    sQuantity: 3,
    productPrice: 450,
    paidPrice: 950,
    duePrice: 300,
    customerName: 'Walk In',
    saleDate: '12-10-24',
    saleTime: '12:40 pm',
    shopeReferance: 'shop2',
  },
];
@Component({
  selector: 'app-all-sales',
  standalone: true,
  imports: [
    MaterialModule,
    MatMenuModule,
    MatButtonModule,
    CommonModule,
    TableModule,
    TagModule,
    IconFieldModule,
    InputTextModule,
    InputIconModule,
    MultiSelectModule,
    DropdownModule,
  ],
  templateUrl: './all-sales.component.html',
  styleUrl: './all-sales.component.scss',
})
export class AllSalesComponent {
  displayedColumns: string[] = [
    'product',
    'productId',
    'productName',
    'saleQuantity',
    'productPrice',
    'paidPrice',
    'duePrice',
    'customerName',
    'saleDate',
    'saleTime',
    'shopeReferance',
    'action',
  ];
  dataSource = ELEMENT_DATA;

  constructor() {}
  printpdf() {
    window.print();
  }
}