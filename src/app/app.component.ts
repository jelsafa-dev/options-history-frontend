import { Component } from '@angular/core';
import { Option } from './models/option';
import { Stock } from './models/stock';
import { OptionService } from './services/option.service';
import { StockService } from './services/stock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Options History';

  options: Option[] = [];
  option?: Option;

  stocks: Stock[] = [];
  stock?: Stock;

  constructor(private optionService: OptionService, private stockService: StockService){ }

  ngOnInit(): void {
    this.optionService
      .getAll()
      .subscribe((result: Option[]) => (this.options = result));

    this.stockService
      .getAll()
      .subscribe((result: Stock[]) => (this.stocks = result));
  }

  newOption(){
    this.option = new Option("", 0, new Stock(""));
  }

  editOption(option: Option){
    this.option = option;
  }

  newStock(){
    this.stock = new Stock("");
  }

  editStock(stock: Stock){
    this.stock = stock;
  }

  updateStockList(stocks: Stock[]){
    this.stocks = stocks;
    this.stock = undefined;
  }

  updateOptionList(options: Option[]){
    this.options = options;
    this.option = undefined;
  }


}
