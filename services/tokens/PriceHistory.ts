import axios from "axios";
import { exchange } from "types";
import { STABLE_COINS } from ".";
import { fetchTokensPriceAsStableCoin } from "./Quotes";

export async function fetchTokenHistoryAsStable(stableBaseSymbol: STABLE_COINS, matchQuoteSymbols?: string[], resolution: string = "1D"): Promise<exchange.ITokenPriceHistory[]>{
    
    const tokens = await fetchTokensPriceAsStableCoin(stableBaseSymbol, matchQuoteSymbols);
    return Promise.all(tokens.map(async (token): Promise<exchange.ITokenPriceHistory> => {   
        const historyConfig = {
            method: 'get',
            url: `${process.env.NEXT_PUBLIC_PRICE_ENDPOINT}/${token.tickerIndex}/charts?resolution=${resolution}`,
            headers: {'Accept-Encoding': 'gzip,deflate,compress'},  
          };
      const pairQuotesHistory = await axios<exchange.ITokenQuoteBar[]>(historyConfig);
      
        return {
            tickerIndex: token.tickerIndex,
            tickerId:token.tickerId,
            quoteSymbol: token.quoteSymbol,
            baseSymbol: token.baseSymbol,
            history:pairQuotesHistory.data.map((bar)=>retimeBarDate(bar))
        }
      }))
    
}

function retimeBarDate(bar: exchange.ITokenQuoteBar):exchange.ITokenQuoteBar {
  
  const barDate: Date = new Date()
  barDate.setTime(bar.time);
  barDate.setUTCHours(0, 0, 0, 0);
  return {
    ...bar,
    time:barDate.getTime()

  }

}