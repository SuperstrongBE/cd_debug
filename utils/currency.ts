export function toPrecision(value:number, precision:number):string {

    if (isNaN(value)) throw new Error('Value is not a number')
    const regex = /([0-9]*)(?:\.{0,1})([0-9]*)/g;
    const r = regex.exec(value.toString())
    if (!r) throw new Error('Value cannot be parsed')
    let decimal = Array(precision).fill(0).join('');
    if (parseInt(r[2])>0){

        decimal = r[2].slice(0,precision);
        if(precision > decimal.length ){
            decimal = decimal.padEnd(precision,'0')
            decimal = decimal.slice(0,precision)
        }
    
    }
    console.log([r[1],decimal])
    return [r[1],decimal].join('.');
    

}

export function toPrecisionValue(value: number, precision: number): number {
    
    const valueString = value.toString();
    if (valueString.length > precision) { 

        const decimal = valueString.slice(precision * -1);
        const unit = valueString.slice(0,valueString.length-precision);
        return parseFloat(`${unit}.${decimal}`);

    }
    return value


}

export function applyPrecision(value: number, precision: number): number { 

    const rawPrecision = Array(precision).fill("0");
    rawPrecision.unshift('1');
    const rawPrecisionFactor = rawPrecision.join('');
    const precisionFactor = parseInt(rawPrecisionFactor);
    return value / precisionFactor;

}