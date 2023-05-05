  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  products$ = new BehaviorSubject<any[]>([])

  constructor(private httpService: HttpClient){}

  public init(): void{
    this.httpService.get("https://fakestoreapi.com/products")
    .subscribe((product:any) => {
      this.products$.next(product)
    })
  }

  getProducts(){
    return this.products$;
  }
}
