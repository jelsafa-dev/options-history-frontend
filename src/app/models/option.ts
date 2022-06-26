import { Stock } from "./stock";

export class Option {
    id?: number;
    name: string;
    stockId?: number;
    stock?: Stock;

    constructor(name: string, stockId: number, stock: Stock){
        this.name = name;
        this.stockId = stockId;
        this.stock = stock;
    }
}