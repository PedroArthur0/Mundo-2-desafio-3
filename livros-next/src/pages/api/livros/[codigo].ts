import { controleLivro } from ".";
import { NextApiRequest, NextApiResponse } from "next";

export default async ( req:NextApiRequest, res:NextApiResponse) => {

    if (req.method === "DELETE") {
        const codigoLivro = Number(req.query.codigo)
        controleLivro.excluir(codigoLivro)
        res.status(200).json('sucesso')
    } else {
        res.status(405).end('Metodo nao permitido')
        res.status(500).end('Exceção no servidor')
    }
}
