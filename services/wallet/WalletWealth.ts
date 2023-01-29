import { ApiClass } from "@proton/api";
import {fetchTokensPrices } from "services/tokens";
import { fetchRates } from "services/fiat/Rates";
import { IWealth, ServiceError, token } from "types";


/**
 * @function fetchWalletWealth
 * @description Aggregate the whole token from a wallet defined by actor name and compute wealth for each token and total cumulated wealth of the 
 * wallet against fiat rates. 
 * @param actorName string
 * @returns token.ITokenPortfolio
 */
export async function fetchWalletWealth(actorName: string): Promise<token.ITokenPortfolio>{ 
    
    const api = new ApiClass('proton');
    const fiatsRates:any[] = await fetchRates(['usd', 'eur', 'gbp', 'nzd', 'aud', 'jpy']);
    const tokenPrices = await fetchTokensPrices();
    const tokenUsers: token.ITokenBalance[] = await api.getAccountTokens(actorName as string);
    
    const balanceWithQuote = tokenUsers.reduce((prev: token.ITokenBalance[], curr: token.ITokenBalance) => {
        
        const foundToken: token.ITokenPrice | undefined = tokenPrices.find((token) => token.symbol.toUpperCase() == curr.currency.toUpperCase()); 
        if (foundToken) { 

            const foundTokenRate = foundToken.rates?.find((rate) => rate.counterCurrency.toUpperCase() == 'USD');
            const balance = { ...curr };
            balance.unitPrice = foundTokenRate?.price
            balance.wealth = fiatsRates.reduce((fiatsList:any[],fiat:any) => {
                if (!foundTokenRate) return fiatsList;
                fiatsList.push({
                    quote: fiat.symbol,
                    amount:(foundTokenRate.price*balance.amount)*fiat.rate
                })
                return fiatsList;
            },[])
            prev.push(balance);

        }
        return prev;

     } , [])

    return {
        tokens: balanceWithQuote,
        totalWealth: computeTotalWealth(balanceWithQuote)
    }
    
}

/**
 * @private
 * @function computeTotalWealth
 * @description Utility function to compute wealth for the total wealth. Mostly code split for readability sakes.
 * @param balances token.ITokenBalance[]
 * @returns IWealth[]
 */
function computeTotalWealth(balances: token.ITokenBalance[]):IWealth[] { 
    
    return balances.reduce((prev:IWealth[], curr) => { 

        if (curr.wealth) { 
     
            curr.wealth.map((wealth) => {
                const cumulatedWealth = (prev.find((entry) => entry.quote == wealth.quote))
                if (cumulatedWealth) {
                    cumulatedWealth.amount += wealth.amount;
                } else { 
                    prev.push({...wealth})
                }    
            })
        }
        return prev
    },[])
}