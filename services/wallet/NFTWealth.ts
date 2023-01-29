import { fetchRates } from "services/fiat/Rates";
import { getNFTInventory } from "services/nft/inventory";
import { fetchTokensPrices } from "services/tokens";
import { IWealth, NFT, token } from "types";
import { applyPrecision } from "utils/currency";

export async function fetchNFTWealth(actorName: string): Promise<NFT.INftPortfolio> {
    const refTokenSymbol = 'XUSDC';
    const nftInventory: NFT.INftCollection[] = await getNFTInventory(actorName as string);
    const fiatsRates: any[] = await fetchRates(['usd', 'eur', 'gbp', 'nzd', 'aud', 'jpy']);
    const tokenPrices = await fetchTokensPrices();
    
    const nftWithRates = nftInventory.reduce((nftsList: NFT.INftCollection[], nft: NFT.INftCollection) => {
        if (!nft.prices) return nftsList;
        if (!tokenPrices) return nftsList;
        const foundToken: token.ITokenPrice | undefined = tokenPrices.find((price) => price.symbol.toUpperCase() == refTokenSymbol);
        if (!foundToken) return nftsList;
        const foundTokenRate = foundToken.rates?.find((rate) => rate.counterCurrency.toUpperCase() == 'USD');
        const foundNftPrice: NFT.INftPrice | undefined = nft.prices.find((price) => price.token_symbol.toUpperCase() == refTokenSymbol)
        if (!foundNftPrice) return nftsList;
        const nftWithWealth: NFT.INftCollection = { ...nft }
        nftWithWealth.wealth = fiatsRates.reduce((fiatsList: IWealth[], fiat: any) => {
                
            if (!foundTokenRate) return nftsList;
            if (!foundNftPrice) return nftsList;
            const nftMedianPrice = parseInt(foundNftPrice.median);
            const toPrecisionNFTMedian = applyPrecision(nftMedianPrice, foundNftPrice.token_precision);
            fiatsList.push({
                quote: fiat.symbol,
                amount: toPrecisionNFTMedian * foundTokenRate.price * fiat.rate
            })
            return fiatsList;
        }, [1])
        nftsList.push(nftWithWealth);
        return nftsList

    }, [])

    return {
        collections: nftWithRates,
        totalWealth:computeTotalWealth(nftWithRates)
    } 
}

function computeTotalWealth(nfts: NFT.INftCollection[]):IWealth[] { 
    
    return nfts.reduce((prev:IWealth[], curr) => { 

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