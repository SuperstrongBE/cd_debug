import { NextApiRequest, NextApiResponse } from "next";
import { token,IWealth, NFT } from "types";
import { fetchWalletWealth } from "services/wallet/WalletWealth";
import { fetchNFTWealth } from "services/wallet/NFTWealth";

type ServiceError = {
    error:any
}
  
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any | ServiceError>
) { 

    const query = req.query;
    const { quote, actorName } = query;
    const tokensWealth: token.ITokenPortfolio = await fetchWalletWealth(actorName as string);
    const nftsWealth: NFT.INftPortfolio = await fetchNFTWealth(actorName as string);
    const reponse = { actorName: actorName, tokens: tokensWealth, nfts: nftsWealth,totalWealth:computeTotalWealth([tokensWealth.totalWealth,nftsWealth.totalWealth]) };   
    res.status(200).json(reponse);
    

}

function computeTotalWealth(wealths?:(IWealth[] | undefined)[]):IWealth[] { 

    if (!wealths) return [];
    return wealths.reduce((prev:IWealth[], curr) => { 

        if (curr) { 
            curr.map((wealth) => {
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

