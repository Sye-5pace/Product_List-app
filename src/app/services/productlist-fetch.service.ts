import { Injectable } from '@angular/core';
import { IProductList } from '../model/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductlistFetchService {
  private productListURL: string = '../../assets/data.json'

  constructor(private http: HttpClient) { }

  fetchProductList(): Observable<IProductList>{
    return this.http.get<IProductList>(this.productListURL)
  }
}
