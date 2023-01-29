import { NextApiRequest, NextApiResponse } from "next";
import {serviceResponse, token } from "types";

import { fetchWalletWealth } from "services/wallet/WalletWealth";

type ServiceError = {
    error:any
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<serviceResponse.ITokenServiceResponse | ServiceError>
) { 

    const query = req.query;
    const { actorName } = query;
    const walletWealth: token.ITokenPortfolio = await fetchWalletWealth(actorName as string);
    res.status(200).json({ result: walletWealth });
    
}


