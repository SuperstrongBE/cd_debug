import { ApiClass } from "@proton/api";
import { Link, LinkSession } from "@proton/web-sdk";
import { action, Action, computed, Computed, thunk, Thunk } from "easy-peasy";
import { fetchWallet } from "services/wallet/FetchWallet";
import { actor, IProtonSession, IWealth, NFT } from "types";


interface ISetWealthParams {
    actorName: string;
    actorWealth:actor.IWalletWealth
}
export interface IWalletStore {
    wallets: actor.IWallet[],
    preferences: {
        currency:string
    }
    //Mutate actor
    activeWallet?: actor.IWallet;
    computedWealth: Computed<IWalletStore, (currency:string)=>number>;
    currencyWealth: Computed<IWalletStore, (actorName: string, currency: string) => number>;
    hasSettler: Computed<IWalletStore, (settlerLevel?:number) => NFT.INftAsset[]>;
    //Mutate actor
    addActorWallet: Action<IWalletStore, actor.IWallet>;
    setActorWealth: Action<IWalletStore, actor.IWalletWealth>;
    setActorInfo: Action<IWalletStore, { actorName: string, name: string, avatar: string }>;
    toggleActorActive:Action<IWalletStore, string>;
    // Fetch 
    fetchActorWealth: Thunk<IWalletStore, string>;
    fetchActorInfo: Thunk<IWalletStore, string>;
    //Global wallet connection
    
    
    
}

export const walletsModel: IWalletStore = {
    wallets:[],
    preferences: {
        currency:'USD'
    },
    /**
     * @function computedWealth
     * Store actions 
     * compute the total wealth of all connected wallet in a currency
     * @param state auto injected by the easy-peasy framework
     * @returns (currency: string)=>nft.INftAsset[]. 
     * Returns a function to compute the wealth from compound value of wealth filtered by currency
     */
    computedWealth: computed((state) => {
        
        return (currency: string) => state.wallets.reduce((prev, current) => {
            
            if (!current || !current.wealth || !current.wealth.totalWealth || !current.active) return prev;
            const foundWealth = current.wealth.totalWealth.find((wealth) => wealth.quote.toUpperCase() == currency);
            if (!foundWealth) return prev;
            return prev+foundWealth.amount;
        },0)
    }),
     /**
     * @function currencyWealth
     * Store actions 
     * Find the totalWealth as currency for a given wallet 
     * @param state auto injected by the easy-peasy framework
     * @returns (actorName: string, currency: string)=>nft.INftAsset[]. 
     * Returns a function to find wealth filtered by currency on a wallet in wallets list filtered by actorName
     */
    currencyWealth: computed((state) => {
        return (actorName: string, currency: string) => {

            const foundWallet = state.wallets.find((wallet) => wallet.actorName == actorName);
            if (!foundWallet || !foundWallet.wealth || !foundWallet.wealth.totalWealth) return 0;
            const foundWealth = foundWallet.wealth.totalWealth.find((wealth) => wealth.quote == currency);
            if (!foundWealth) return 0;
            return foundWealth.amount;
    
        }
    }),

    /**
     * @function hasSettler
     * Store actions 
     * Find if the current connected wallets have a settler NFT
     * @param state auto injected by the easy-peasy framework
     * @returns (settlerLevel=0)=>nft.INftAsset[]. Returns a function to find settle asset filtered by settlerLevel
     */
    hasSettler:computed((state) => { 
        return (settlerLevel=0) => {
            
            return [];

        }
    }),

    /**
     * @function addActorWallet
     * Store actions 
     * Inject a new actor if not exists in the state.actors, mostly used in the connect function
     * as success handler.
     * Use as store action through useStoreActionsCD((actions)=>action.addActorWallet) hook
     * @param state auto injected by the easy-peasy framework
     * @param payload the IActorModal that should be injec 
     */
    addActorWallet: action((state, payload) => {
        const isActorExists = state.wallets.some((actor) => actor.actorName == payload.actorName);
        if (!isActorExists) {
            state.wallets.push(payload);
        }
    }),

    /**
     * @function setActorInfo
     * Store action 
     * @param payload @type {actorName:string,name:string,avatar:string}
     * Attach actor info to an existing state.actor defined by params.actorName
     * Use as store action through useStoreActionsCD((actions)=>action.setActorInfo) hook
     */
    setActorInfo: action((state, payload) => {
        const existingActor = state.wallets.find((actor) => actor.actorName == payload.actorName);
        if (existingActor) {
            existingActor.name = payload.name;
            existingActor.avatar = payload.avatar;

        }
    }),

    /**
     * @function setActorWealth
     * Store action 
     * @param payload 
     * @type ISetWealthParams
     * Attach actor wealth to an existing state.actor defined by params.actorName
     * Use as store action through useStoreActionsCD((actions)=>action.setActorWealth) hook
     */
    setActorWealth: action((state, payload:actor.IWalletWealth ) => {
        const existingActor = state.wallets.find((actor) => actor.actorName == payload.actorName )        
        if (!existingActor) return;
        existingActor.wealth = payload;
    }),

    /**
     * @function toggleActorActive
     * Store action 
     * @param payload 
     * @type string
     * Toggle the actor active field of a state.actor defined by params.actorName
     * The active field is used to define if an account is involved in the computedWealth computation
     * Use as store action through useStoreActionsCD((actions)=>action.setActorWealth) hook
     */
    toggleActorActive: action((state, payload) => {
        console.log ('toogle')
        const existingActor = state.wallets.find((actor) => actor.actorName == payload)
        if (!existingActor) return;
        existingActor.active = !existingActor.active;
    }),
    
    /**
     * @async
     * @function fetchActorInfo
     * Store thunk 
     * @param payload 
     * @type string
     * Fetch the actor avatar and name from the proton chain. The actor is defined by payload as actorName.
     * Once the service respond, the data is tied to actor through the actions.setActorInfo hook
     * Use as store action through useStoreActionsCD((actions)=>action.setActorWealth) hook
     * @returns void
     */
    fetchActorInfo: thunk(async (actions, payload: string) => { 
        try {

            const api = new ApiClass('proton');
            const actorInfo = await api.getProtonAvatar(payload);
            if (!actorInfo) return 
            actions.setActorInfo({
                name: actorInfo.name as string,
                avatar: `${actorInfo.avatar as string}`,
                actorName:payload
                
            })


        } catch (e) { }
    }),

    /**
     * @async
     * @function fetchActorWealth
     * Store thunk 
     * @param payload 
     * @type string
     * Fetch the actor wealth and name from the proton chain. The actor is defined by payload as actorName.
     * Once the service respond, the data is tied to actor through the actions.setActorInfo hook
     * Use as store action through useStoreActionsCD((actions)=>action.fetchActorWealth) hook
     * @returns void
     */
    fetchActorWealth: thunk(async (actions, payload: string) => {
        const actorWealth = await fetchWallet(payload);
        if (actorWealth) { 
            actions.setActorWealth(actorWealth)
        } 
    }),
  
}