import { Relatorio } from "../../../@types/relatorio";
import { useState, useEffect } from "react";
import { ApiService } from "../../../services/ApiService";

export function useRelatorio (){
    const [listaRelatorio, setListaRelatorio] = useState<Relatorio[]>([]);

    useEffect(()=>{
        ApiService.get('/adocoes').then((resposta) =>{
            setListaRelatorio(resposta.data);
        })
    
    },[])
    return {
        listaRelatorio
    }
}