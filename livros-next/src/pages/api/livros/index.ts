import { NextApiRequest, NextApiResponse } from "next"
import ControleLivro from "../../../../classes/controle/ControleLivros"
import { Livro } from "../../../../classes/modelo/Livro"

export const controleLivro = new ControleLivro()

export default async ( req:NextApiRequest, res:NextApiResponse) => {

        if (req.method === "GET") {
            const livrosJson = controleLivro.obterLivros()
            const livros: Livro[] = Object.values(livrosJson)
            res.status(200).json(livros)
        }  else if (req.method === 'POST') {  
            const novoLivro:Livro = req.body
            controleLivro.incluir(novoLivro)
            res.status(200).json(novoLivro.codigo + 'sucesso');
          } else {
            res.status(405).end('Metodo nao permitido')
            res.status(500).end('Exceção no servidor')
          }       
}           