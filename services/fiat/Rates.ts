import axios from "axios";
import { symbol } from "prop-types";
import { ServiceError } from "types";

export async function fetchRates(matchSymbols?:string[]):Promise<any | ServiceError> { 

    //TODO: Checkout why @wirehead make the api crash !
    try {
        const ratesConfig = {
            method: 'get',
            url: `https://anyapi.io/api/v1/exchange/rates?apiKey=1h7tjq0gqjgp0fi2a2lu9aeodmbu0gfg6t8aamfu4kov50kieq219g&base=USD`,
            headers: {
                'Accept-Encoding': 'gzip,deflate,compress',  
            }
        }

        const rates = await axios<any>(ratesConfig);
        if (rates.data && rates.data.rates) { 

            const keys = Object.keys(rates.data.rates);
            const ratesArr = keys.map((key)=>{return {symbol:key,rate:rates.data.rates[key]}})
            if (matchSymbols && matchSymbols.length > 0) return ratesArr.filter((rate) => matchSymbols.some((symbol) => symbol.toUpperCase() == rate.symbol.toUpperCase()));
            return ratesArr
        }

        return [];
        
        

    } catch (e: any) {
        console.log(e)
        return {
            ...e
        }
    }
}