import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './Model/order';
import { Product } from './Model/product';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http: HttpClient) { }

  private orderUrl = 'http://localhost:64374/api/order';
  public getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderUrl);
  }

  public getOrder(orederId: number): Observable<Order> {
    return this.http.get<Order>(this.orderUrl+"/"+orederId);
  }

  private productUrl = 'http://localhost:64374/api/product';
  public getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productUrl);
  }

}
