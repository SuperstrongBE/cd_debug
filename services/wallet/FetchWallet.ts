import axios from "axios";
import { NFT, token, actor } from "types";

export async function fetchWallet(actorName: string): Promise<actor.IWalletWealth>{ 

    let config = {
    method: 'get',
    url: `http://localhost:3000/api/accounts/${actorName}`,
    headers: { 
        'Accept': 'application/json', 
        'Cookie': '_us=1666705972; ad-con=%7B%26quot%3Bdate%26quot%3B%3A%26quot%3B2022-10-24%26quot%3B%2C%26quot%3Bads%26quot%3B%3A%5B%5D%7D; _us=1672185521; ad-con=%7B%26quot%3Bdate%26quot%3B%3A%26quot%3B2022-12-26%26quot%3B%2C%26quot%3Bads%26quot%3B%3A%5B%5D%7D; mode=day; src=1'
    }
    };

    const response = await axios<actor.IWalletWealth>(config);
    return response.data;
}