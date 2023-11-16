import { NextApiRequest, NextApiResponse } from "next"
import ControleEditora from "../../../../classes/controle/ControleEditora"

export const controleEditora = new ControleEditora()

export default async ( req:NextApiRequest, res:NextApiResponse) => {

        if (req.method === "GET") {
            res.status(200).json(controleEditora.getEditoras())
          } else {
            res.status(405).end('Metodo nao permitido')
            res.status(500).end('Exceção no servidor')
          }       
}           
