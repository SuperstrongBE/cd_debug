import axios from "axios";
import { NFT, ServiceError } from "types";

export async function getNFTInventory(actorName:string):Promise<NFT.INftCollection[]>  { 
    
    const nftConfig = {
        method: 'get',
        url: `https://proton.api.atomicassets.io/atomicmarket/v1/prices/inventory/${actorName}`,
        headers: {'Accept-Encoding': 'gzip,deflate,compress'}, 
    }

    const nftInventory = await axios<{data:{collections:NFT.INftCollection[]}}>(nftConfig);
    return nftInventory.data.data.collections;
}