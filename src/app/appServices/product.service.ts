import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn : 'root'
})

export class ProductService{

constructor(private http:HttpClient) {}

 url='https://api.spacexdata.com/v3/launches?limit=100';
 product(): Observable<any>{
 return this.http.get(this.url)
 
}

filterproduct(year): Observable<any>{
    return this.http.get('https://api.spacexdata.com/v3/launches?limit=100&launch_year='+year);
}

}