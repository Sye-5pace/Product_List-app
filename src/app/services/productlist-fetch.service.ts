import { Injectable } from '@angular/core';
import { IProduct } from '../model/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductlistFetchService {
  private productListURL: string = '../../assets/data.json'

  constructor(private http: HttpClient) { }

  fetchProductList(): Observable<IProduct>{
    return this.http.get<IProduct>(this.productListURL)
  }
}
