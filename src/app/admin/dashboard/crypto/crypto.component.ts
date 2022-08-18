import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './service/currency.service';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit {
  selecedCurrency : string = "VND";

  constructor(private currencyService : CurrencyService) { }

  ngOnInit(): void {
  }
  sendCurrency(event:string){
    console.log(event);
    this.currencyService.setCurrency(event);
  }
}
