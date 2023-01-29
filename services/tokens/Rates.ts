import axios from "axios";
import { exchange } from "types";
import { STABLE_COINS } from ".";
import { fetchTokensPriceAsStableCoin } from "./Quotes";

export async function fetchRates(): Promise<any>{
    
    
        const ratesConfig = {
            method: 'get',
          url: `https://www.api.bloks.io/proton/tokens?chain=proton`,
          headers: {
            'Accept-Encoding': 'gzip, deflate, br',
            'Host': 'www.api.bloks.io',
            'Content-type': 'application/json',
            'User-agent': 'PostmanRuntime/7.30.0'
            }
            
          };
      const rates = await axios<any>(ratesConfig);
      
      return rates.data;
      
    
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