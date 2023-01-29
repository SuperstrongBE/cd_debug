
import { ApiClass } from "@proton/api";
import { exchange, token } from "types";
import axios from "axios";
import { STABLE_COINS } from ".";

export async function fetchTokensPrices(symbol?: string):Promise< token.ITokenPrice[] > {

    const api = new ApiClass('proton');
    const tokenPrices: token.ITokenPrice[] = await api.getTokenPrices();
    return tokenPrices.reduce((tokensList:token.ITokenPrice[], currentToken:token.ITokenPrice) => { 

        if (!currentToken || !currentToken.rates) return tokensList;
        const usdRate: token.ITokenRate[] = currentToken.rates.filter((rate) => rate.counterCurrency.toUpperCase() == 'USD');        
        tokensList.push({...currentToken,rates:usdRate})
        return tokensList;
    },[])
    
}

export async function fetchTokensPriceAsStableCoin(stableBaseSymbol:STABLE_COINS,matchQuoteSymbols?:string[]): Promise<exchange.ITokenQuote[]> {
    const quoteTime: number = new Date().getTime();
    try {
        const nftConfig = {
            method: 'get',
            url: `${process.env.NEXT_PUBLIC_PRICE_ENDPOINT}`,
            headers: {'Accept-Encoding': 'gzip,deflate,compress'}, 
        }

        const tokenPrices = await axios<exchange.ITicker[]>(nftConfig);
        const XUSDCQuotes = tokenPrices.data.filter((price) => price.base_token.symbol.name == stableBaseSymbol);

        const tokenQuotes = XUSDCQuotes.map((quote) => { 
            return {
                tickerIndex: quote.id,
                tickerId:quote.ticker_id,
                baseSymbol: stableBaseSymbol,
                quoteSymbol: quote.quote_token.symbol.name,
                lastPrice: quote.last_price,
                quoteTime
            }
        })
        if (matchQuoteSymbols && matchQuoteSymbols.length > 0) { 

            return tokenQuotes.filter((price) => matchQuoteSymbols.some((filter) =>  price.quoteSymbol.toLowerCase() == filter.toLowerCase()));

        }
        return tokenQuotes;

    } catch (e: any) {
        
        return {
            ...e
        }
    }
}


