import { controleEditora } from ".";
import { NextApiRequest, NextApiResponse } from "next";


export default async ( req:NextApiRequest, res:NextApiResponse) => {
    if (req.method === "GET") {
        const codigoDaEditora  = Number(req.query.codEditora) //parseInt(req.query.codEditora as string) 
        res.status(200).json('Nome da editora: ' + controleEditora.getNomeEditora(codigoDaEditora))
      } else { 
        res.status(405).end()
        res.status(500).end()
      }  
}

