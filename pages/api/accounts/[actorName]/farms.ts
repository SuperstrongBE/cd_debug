import { JsonRpc } from "@proton/js";
import { NextApiRequest, NextApiResponse } from "next";

type ServiceError = {
    error:any
}

interface IStake {

    key: {
        sym: string;
        contract: string;
    };
    value: {
        balance: number;
        accrued_rewards: number[];
        reward_indices: string[];
    }

}

interface IFarm {
    symbol: string;
    contract: string;
    balance: number;
    rewards: number;
    indices: number;
}

interface IFarmsServiceResult {

    farms:IFarm[]

}
  
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any | ServiceError>
) { 

    const query = req.query;
    const { quote, actorName } = query;
    const refQuote = quote || 'XUSDC';
    const rpc = new JsonRpc(process.env.NEXT_PUBLIC_PROTON_ENDPOINTS?.split(','))
    const resultsRow = await rpc.get_table_rows({
        code: 'yield.farms',
        scope: 'yield.farms',
        table: 'rewards',
        lower_bound:actorName,
        upper_bound:actorName,
        
    })

    const farmsList: IFarm[] = [];
    if (resultsRow.rows && resultsRow.rows[0] && resultsRow.rows[0].stakes ) { 

        
            const parsedStakes = resultsRow.rows[0].stakes.map((stake:IStake) => {
                const farm:IFarm = {
                    contract: stake.key.contract,
                    symbol: stake.key.sym,
                    balance:stake.value.balance,
                    rewards: stake.value.accrued_rewards.reduce((prev, curr) => { return prev += curr }, 0),
                    indices:stake.value.reward_indices.reduce((prev, curr) => { return prev += parseFloat(curr) }, 0)/stake.value.reward_indices.length,
                    
        
                }
                return farm
            })

        farmsList.push(...parsedStakes);

        
        

    }
   
    
   
    const reponse = {res:farmsList }
    res.status(200).json(reponse);
    

}
