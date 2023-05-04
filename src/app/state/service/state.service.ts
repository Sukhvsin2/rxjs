  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private httpService: HttpClient){}

  public init(): void{
    this.httpService.get("https://fakestoreapi.com/products")
    .subscribe(data => {
      console.log(data);
    })
  }
}
