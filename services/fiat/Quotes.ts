import axios from "axios";
import { ServiceError } from "types";

export async function fetchUSDCQuoteForFiat(fiatCode:string[]=["usd"]):Promise<any | ServiceError> { 

    //TODO: Checkout why @wirehead make the api crash !
    try {
        const quoteConfg = {
            method: 'get',
            url: `${process.env.NEXT_PUBLIC_FIAT_PRICE_ENDPOINT}/simple/price?ids=usd-coin&vs_currencies=${fiatCode.join("%2C")}`,
            
        }

        const quotes = await axios(quoteConfg);

        if (quotes.data['usd-coin']) {
            const keys = Object.keys(quotes.data['usd-coin']);
            return keys.map((key) => {
                return {
                    tokenSymbol:'usd-coin',
                    fiatSymbol: keys,
                    value:quotes.data['usd-coin'][key]
                    
                }
            })
        }
        return quotes.data;

    } catch (e: any) {
        
        return {
            ...e
        }
    }
}