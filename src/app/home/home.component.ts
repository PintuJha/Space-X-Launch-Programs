import { Component, OnInit } from '@angular/core';
import { ProductService } from '../appServices/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private _msgService: ProductService) { }

  products = [];
  yeararray = [];
  
  ngOnInit(): void {

    this._msgService.product().subscribe(productData => {
      this.products = productData
      this.yeararray = productData.map(item => item.launch_year)
        .filter((value, index, self) => self.indexOf(value) === index)
    })
  }


// Clear All code
  clearall(){
    this._msgService.product().subscribe(productData => {
      this.products = productData
      this.yeararray = productData.map(item => item.launch_year)
        .filter((value, index, self) => self.indexOf(value) === index)
    })
  }
// END Clear All code


// year by filter code 
  setInput(year){
   this._msgService.filterproduct(year).subscribe(res =>{
     console.log(res);
     this.products = res;
   })
   
  }

}
// End year by filter code 