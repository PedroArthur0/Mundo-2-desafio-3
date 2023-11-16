import { useState  } from "react"
import ControleEditora from "./controle/ControleEditora"
import ControleLivro from "./controle/ControleLivros"
import { Livro } from "./modelo/Livro"
import {useNavigate} from 'react-router-dom'

const controleLivro = new ControleLivro()
const controleEditora = new ControleEditora()

export default function LivroDados ()  {

    const opcoes = controleEditora.getEditoras()

    const [titulo, setTitulo] = useState('')
    const [resumo, setResumo] = useState('')
    const [autores, setAutores] = useState('')
    const [codEditora, setCodEditora] = useState(opcoes[0])
    const navigate = useNavigate();

    const tratarCombo = (e) => {
        setCodEditora(parseInt(e.target.value));
    }
    //console.log(codEditora)

    const incluir = (evento) => {
        evento.preventDefault()
        const livro = new Livro(titulo, resumo, codEditora, 0, autores.split('\n'))
        controleLivro.incluir(livro)
        navigate("/")
    }


    return (
        <main>
            <h1>Dados do Livro </h1>
            <form onSubmit={incluir}> 
                <label htmlFor="titulo"> Titulo </label>
                    <input 
                    type="text" 
                    name="titulo" 
                    onChange={(etitulo) => setTitulo(etitulo.target.value)}
                    />

                <label htmlFor="resumo"> Resumo </label>
                    <textarea 
                    name="resumo" 
                    cols="30" 
                    rows="5" 
                    onChange={(eresumo) => setResumo(eresumo.target.value)}
                    >
                    </textarea> 

                <label htmlFor="editoras"> Editoras </label>
                <select onChange={tratarCombo} name="editoras">
                    {opcoes.map((editora) => {
                        return (
                        /* pega o codigo da editora:*/ <option key={editora.codEditora} value={editora.codEditora}>{editora.nome}</option> 
                        /* pega o nome da editora:  <option key={editora.codEditora} value={editora.nome}>{editora.nome}</option> */
                        /* pega o objeto editora:  <option value={editora}>{editora.nome}</option>*/
                        )
                    })}
                </select>  

                <label htmlFor="autores"> Autores(1 por linha) </label>
                    <textarea 
                    name="autores" 
                    cols="60" 
                    rows="5"
                    onChange={(eautores) => setAutores(eautores.target.value)}
                    >
                    </textarea>      

                <input type="submit" value="Salvar Dados" />     
            </form>
        </main>
    )
}