import { useContext } from "react";
import { AuthContext } from "../../post/Auth.Context";


export function useAuth(){
    const context = useContext(AuthContext)

    return context 
}