"use client"
import React, {
    createContext,
    useState,
    useCallback,
    useContext
  } from 'react';
  import ProtonWebSDK,{ ProtonWebLink, Link,LinkSession } from '@proton/web-sdk';
import { useStoreActionsCD } from '@/store/hooks';


export  interface AuthState {
    token?: string;
    user?: object;
  }
  
  export interface SignInCredentials {
    email: string;
    password: string;
  } 

  export interface IAuthContext  {

    loading: boolean;
    sessions:{link:ProtonWebLink | Link | undefined,session:LinkSession | undefined};
    signIn: () => void;
    signOut: () => void;

  }
  
  const AuthContext = createContext<IAuthContext | null>(null);

export default function ProtonAuthProvider({ children }:{children:any}) {

    const [session, setSession] = useState<LinkSession>();
  const [loading, setLoading] = useState(true);
  
  const { fetchActorInfo,fetchActorWealth,addActorWallet} = useStoreActionsCD(actions =>actions.wallet)
  
    async function signIn ():Promise<{session:LinkSession | undefined,link:Link | ProtonWebLink | undefined} | undefined>{

      try {
        const { link, session } = await ProtonWebSDK({
          linkOptions: {
            chainId: process.env.NEXT_PUBLIC_PROTON_CHAINID,
            endpoints: process.env.NEXT_PUBLIC_PROTON_ENDPOINTS!.split(','),
          },
          transportOptions: {
            requestAccount: process.env.NEXT_PUBLIC_PROTON_ACCOUNT as string,
            requestStatus: true,
          },
          selectorOptions: {
            appName: process.env.NEXT_PUBLIC_APP_NAME as string,
            appLogo: process.env.NEXT_PUBLIC_APP_LOGO as string
          }
        }
        )
      
        
        if (session) {
          addActorWallet({
            active: true,
            actorName: session.auth.actor.toString(),
            link: link,
            session: session
          })
          fetchActorInfo(session.auth.actor.toString())
          fetchActorWealth(session.auth.actor.toString())

          return { link, session };
        }
      } catch (e) {
        console.log(e)
      }      
       
    }

    function ploup(): any {
      
      window.document.body.appendChild(document.createElement('div'));

    }
    
    const signOut = useCallback(async () => {
      
      
    }, []);
  
    const value:any = React.useMemo(() => ({ loading, session, signIn, signOut }), [
      loading,
      session,
      signIn,
      signOut,
    ]);
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  };
  
  export const useProtonAuth = (): IAuthContext => {
    const context = useContext(AuthContext);

    if (!context) {
      throw new Error(`useAuth must be used within a AuthProvider`);
    }
  
    return context as IAuthContext;
  }
  
  