import ProtonWebSDK, { ProtonWebLink, Link,LinkSession } from '@proton/web-sdk';
import { IProtonIdentity, IProtonSession } from 'types';

const ENDPOINT = process.env.NEXT_PUBLIC_PROTON_ENDPOINTS?.split(',');

export default class ProtonConnect {

    public session:LinkSession |  undefined;
    public link:Link |  ProtonWebLink | undefined;
    private requestAccount:string
    private appName:string
    private appLogo:string;

    constructor (params:IProtonIdentity){

        this.requestAccount =  params.requestAccount;
        this.appName = params.appName;
        this.appLogo = params.appLogo;
        console.log(this.requestAccount)

    }

    async connect(restoreSession = false):Promise<IProtonSession>{


      if (!ENDPOINT || ENDPOINT.length == 0){

        throw('Missing Proton APi endpoint ')

      }
        const { link, session } = await ProtonWebSDK({   
          linkOptions: {
            endpoints: ENDPOINT,
            restoreSession
        }, 
          transportOptions: {
            requestAccount:this.requestAccount,
            requestStatus: true,
          },
          selectorOptions: {
            appName: this.appName,
            appLogo:this.appLogo,
            customStyleOptions: {
              modalBackgroundColor: '#121212',
              logoBackgroundColor: 'white',
              isLogoRound: true,
              optionBackgroundColor: 'white',
              optionFontColor: '#121212',
              primaryFontColor: 'white',
              secondaryFontColor: 'white',
              linkColor: 'white'
          }
          },
          
        });

        this.link = link;
        this.session = session;
        return {
          link:link as  Link,
          session:session as LinkSession
        }
    }

    async login (restoreSession = false){

      try {
        await this.connect(restoreSession);
        if (!this.session || !this.session.auth ){

          throw new Error ('Error occured while you logging in')

        }

        const {auth} = this.session;
        //const chainAccountAvatar = avatar ? `data:image/jpeg;base64,${avatar}` : 'https://static.wamiz.com/images/news/medium/omg-cat.jpg'

        return {
          user:{
            actor: auth.actor,
            permission: auth.permission,
          }

        }

      }catch(e){

        return e

      }

    }

    restoreSession (){}

}