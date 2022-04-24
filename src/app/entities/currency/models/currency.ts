type CurrencyName = 'USD' | 'EUR' | 'UAH';
type CurrencySymbol = '₴' | '€' | '$';

export interface ICurrency  {
    symbol: CurrencySymbol,
    name: CurrencyName,
    image: string
}

export class Currency implements ICurrency{

    symbol!: ICurrency['symbol'];
    name!: ICurrency['name'];
    image!: ICurrency['image'];

    constructor(source: ICurrency){
        Object.assign(this, source)
    }
}
