import ControleEditora from "../classes/controle/ControleEditora"
import { Livro } from "../classes/modelo/Livro"


const controleEditora = new ControleEditora()

export interface LinhaLivroProps {

    livro: Livro

    excluir(codigoLivro:number): void
}


export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => { 
    return (
            <tr> 
                <td>{props.livro.titulo} <br></br>
                <button onClick={props.excluir} type="button" className="btn btn-danger"> Excluir </button>
                </td>
                <td>{props.livro.resumo}</td>
                <td>
                    {controleEditora.getNomeEditora(props.livro.codEditora)}
                </td>
                <td>
                    <ul>
                        {props.livro.autores.map((a, index) =>  <li className="semQuebra" key={index}>{a}</li> )}
                    </ul>
                </td>
            </tr>
)
}

