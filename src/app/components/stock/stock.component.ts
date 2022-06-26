import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stock } from 'src/app/models/stock';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  @Input() stock?: Stock
  @Output() stocksUpdated = new EventEmitter<Stock[]>()

  constructor(private stockService: StockService){ }

  ngOnInit(): void {
  }

  addStock(){
    this.stockService
      .create(this.stock)
      .subscribe((stocks) => this.stocksUpdated.emit(stocks))
  }

  updateStock(){
    this.stockService
      .update(this.stock)
      .subscribe((stocks) => this.stocksUpdated.emit(stocks))
  }

  deleteStock(){
    this.stockService
      .delete(this.stock)
      .subscribe((stocks) => this.stocksUpdated.emit(stocks))
  }

}
