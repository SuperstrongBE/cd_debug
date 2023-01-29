import { JsonRpc } from "@eoscafe/light-api";
import { Balance } from "@eoscafe/light-api/dist/src/types/common";

/**
 * Fetch all balances for a proton wallet defined by actorName
 * @param actorName 
 * @returns 
 */
export async function fetchWalletTokens(actorName: string):Promise<Balance[]> { 
    
    const rpc: JsonRpc = new JsonRpc('proton');
    const tokens = await rpc.get_balances(actorName)
    const nonZeroTokenBalances = tokens.balances.filter(token=>parseFloat(token.amount) > 0)
    return nonZeroTokenBalances;

}