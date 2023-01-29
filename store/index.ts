import {createStore} from 'easy-peasy';

import { IWalletStore, walletsModel } from './models/wallet';


//TODO: Add sub store for user preference
export interface StoreModel {

    wallet: IWalletStore;
    

}

export const globalStore = createStore<StoreModel>({
    /**
     * @var actors
     * @type Array<IActorModel>
     * The list of connected proton wallet wrapped in a IActorModel
    */
    wallet:walletsModel

})