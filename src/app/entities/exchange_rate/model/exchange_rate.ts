
export interface ICurrency{
    r030?: number;
    txt: string;
    rate: number;
    cc: string;
    exchangedate?: string;
};

export class Currency implements ICurrency{
    r030?: ICurrency['r030'];
    txt!: ICurrency['txt'];
    rate!: ICurrency['rate'];
    cc!: ICurrency['cc'];
    exchangedate?: ICurrency['exchangedate'];
    rateOutput: string;

    constructor(source: ICurrency) {
        Object.assign(this, source);
        this.rateOutput = this.getRateOutput(source.rate)
    }

    getRateOutput(rate: number) : string {
        return rate.toFixed(2)
    }
}

