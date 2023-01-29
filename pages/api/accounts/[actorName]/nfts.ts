import { NextApiRequest, NextApiResponse } from "next";
import {token } from "types";

import { fetchNFTWealth } from "services/wallet/NFTWealth";

type ServiceError = {
    error:any
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any | ServiceError>
) { 


    const query = req.query;
    const { actorName } = query;
    const nftWealth: token.ITokenPortfolio = await fetchNFTWealth(actorName as string);
    
    res.status(200).json({ result: nftWealth });
    
}


