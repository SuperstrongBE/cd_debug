import { Balance } from "@eoscafe/light-api/dist/src/types/common";
import { NumberInputHandlers } from "@mantine/core";
import { Link, LinkSession, ProtonWebLink } from "@proton/web-sdk";

declare interface IProtonIdentity {

    requestAccount:string;
    appName:string;
    appLogo:sting;
  
  }
  
  declare interface IProtonSession {
  
    session:LinkSession;
      link:Link;
  
  }

declare interface IActorWealth {
  
  globalWealth: IWealth;
  assets: {
    nft?: {
      portfolio: any[];
      wealth: IWealth;
    },
    tokens?: {
      token: ITokenBalance[],
      wealth:IWealth
      
    }
  }
  
}

  declare interface IWealth {
    quote: string = '';
    amount: number = 0;
  }
  
  declare interface INFTWealth {
    wealth: IWealth;
    nft: any;
  }
  
  declare interface ITokenWealth {
    wealth: IWealth;
    balance: Balance;
  }
  
  
  declare interface IQuote {
  
    volume: number;
    open: number;
    high: number;
    low: number;
    close: number;
    time: number;
    
  
  }
  
  declare interface IPair {
    id:number,
    tickerId: string;
    base: string,
    quote: string,
    quotes:IQuote[]
  }
  
  declare interface IBalance {
    amount: number;
    block_num: string;
    block_time: string;
    contract: string;
    currency: string;
    decimals: number;
  }
  
  declare interface ITokenBalance {
    id:number,
    tickerId: string;
    baseSymbol: string;
    baseAmount: number;
    quoteSymbol: string;
    quoteAmount: number;
   
  }
  
  declare type ServiceError = {
  error:any
  }

declare module serviceResponse {

  interface ITokenServiceResponse { 

    result: ITokenPortfolio;

  }

  interface INftPortfolio {

    result: INftPortfolio;

  }

}

declare module user { 

  declare interface IUser {

    preferences: IPreferences;
    wallets?: IWallet[];
    lastSessionTime:number
  
  }

  declare interface IPreferences {

  }

}



declare interface IActor {
  
  
}

declare module actor {


  /**
   * @module actor
   * @interface IWalletWealth
   * @description Used in both api and store, it define an abstract portfolio linked 
   * to a wallet that contains NFT and token with a global aggregated price. 
   * Contains farms and other undefined field as any for future references
   * 
   */
  export interface IWalletWealth {
    actorName: string,
    nfts: NFT.INftPortfolio,
    tokens: token.ITokenPortfolio,
    totalWealth?: IWealth[],
    farms?: any
  }

  /**
   * @module actor
   * @interface IWallet
   * @description A complete proton wallet wrapper/composition with link and session and wealth
   * 
   */

  declare interface IWallet {

    actorName: string;
    name?: string;
    avatar?: string;
    link?: ProtonWebLink | Link;
    session?: LinkSession;
    active: boolean;
    wealth?:actor.IWalletWealth

  }

}



declare module exchange {

  export interface ISymbol {
      name: string,
      precision:number
  }

  export interface ITicker {
    id: number;
    base_token: {
      symbol: ISymbol
    }
    quote_token: {
      symbol: ISymbol
    }
    min_buy: string;
    min_sell: string;
    frozen: boolean;
    fee: number;
    last_price: number;
    volume24: number;
    volumeWeek: number;
    volumeMonth: number;
    change24: number;
    high24: number;
    low24: number;
    ticker_id: string;
    base_volume: number;
    quote_volume: number;
    ask: number;
  
  }

  export interface ITokenQuote { 

    tickerIndex     : number;
    tickerId        : string;
    baseSymbol      : string;
    quoteSymbol     : string;
    lastPrice       : number;
    quoteTime       : number

  }

  export interface ITokenQuoteBar {
    volume: number;
    open: number;
    high: number;
    low: number;
    close: number;
    time: number;
  }

  export interface ITokenPriceHistory { 
    tickerIndex     : number;
    tickerId        : string;
    baseSymbol      : string;
    quoteSymbol     : string;
    history         : exchange.ITokenQuoteBar[]

  }

  declare interface IBalance {
    amount: number;
    block_num: string;
    block_time: string;
    contract: string;
    currency: string;
    decimals: number;
  }

}
 
export module token {

  export interface ITokenPortfolio {
    totalWealth?        : IWealth[];
    tokens?             : ITokenBalance[]
   }

  export interface IToken {
    contract: string;
    symbol: string;
    rank: number;
    rates:token.ITokenRate[];
  }

  export interface ITokenBalance {
    currency: string;
    amount: number;
    contract: string;
    decimals: number;
    rates?: token.ITokenBalancePrice[];
    unitPrice?:number;
    wealth?:IWealth[]
    
  }

  export interface ITokenBalancePrice {
    currency: string;
    price: number;
    amount: number;
    change:number
  }

  export interface ITokenPrice {
    contract: string;
    symbol: string;
    rank: number;
    rates?: token.ITokenRate[];
    
  }
  
  export interface ITokenRate {
    counterCurrency: string;
    price: number;
    priceChangePercent: number;
    marketCap: number;
    volume: number;
    timestamp: number;
  }

  export interface ITokenFiat {
  }
}
export module NFT {

  export interface INftPortfolio {
    totalWealth?        : IWealth[];
    collections?        : NFT.INftCollection[];
  }

  export interface INftCollection {
    contract            : string;
    collection_name     : string;
    name                : string;
    img                 : string;
    author              : string;
    allow_notify        : boolean;
    authorized_accounts : string[];
    notify_accounts     : any[];
    market_fee          : number;
    data                : INftData;
    created_at_time     : string;
    created_at_block    : string;
    prices?             : NFT.INftPrice[]
    wealth?             : IWealth[];
  }

  export interface INftTemplate {

    template_id         : string;
    max_supply          : string;
    is_transferable     : boolean;
    is_burnable         : boolean;
    issued_supply       : string;
    immutable_data      : [];
    created_at_time     : string;
    created_at_block    : string;

  }

  export interface INftAsset {
    contract                  : string;
    asset_id                  : string;
    owner                     : string;
    is_transferable           : boolean;
    is_burnable               : boolean;
    collection                : INftCollection;
    schema                    : Schema;
    template                  : INftTemplate;
    mutable_data              : MutableData;
    immutable_data            : ImmutableData2;
    template_mint             : string;
    backed_tokens             : any[];
    burned_by_account?        : any;
    burned_at_block?          : any;
    burned_at_time?           : any;
    updated_at_block          : string;
    updated_at_time           : string;
    transferred_at_block      : string;
    transferred_at_time       : string;
    minted_at_block           : string;
    minted_at_time            : string;
    data                      : INftData;
    name                      : string;
  }

  export interface INftPrice {
    token_symbol      : string;
    token_precision   : number;
    token_contract    : string;
    median            : string;
    average           : string;
    min               : string;
    max               : string;
    suggested_median  : string;
    suggested_average : string;
  }
  
  export interface INftData {
    img               : string;
    url               : string;
    name              : string;
    description       : string;
  }
  
  export interface INftSchemaFormat {
    name        : string;
    type        : string;
}

  export interface INftSchema {
    schema_name       : string;
    format            : INftSchemaFormat[];
    created_at_block  : string;
    created_at_time   : string;
  }

}