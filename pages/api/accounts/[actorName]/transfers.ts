
import { NextApiRequest, NextApiResponse } from 'next'
import { fetchTransfersHistory } from 'services/actor/ActorTransfers';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) { 
    const query = req.query;
    const { actorName } = query;
    const txs = await fetchTransfersHistory(actorName as string);
    res.status(200).json(txs)


}