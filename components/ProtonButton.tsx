"use client"
import { useProtonAuth } from "./providers/AuthProvider"

interface Props { };
const ProtonButton:React.FC<Props> = () => {
    const protonCTX = useProtonAuth();
    return (<>
        <button onClick={() => { console.log('yo button'); protonCTX.signIn() }}>Yo</button>
    </>)
 }
 export default ProtonButton