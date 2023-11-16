import type { NextPage } from "next";
import React from "react";
import styles from '../styles/Home.module.css'
import ControleEditora from "../../classes/controle/ControleEditora";
import { Livro } from "../../classes/modelo/Livro";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Head from 'next/head'
import { Menu } from '../../componentes/Menu'
import ControleLivro from "../../classes/controle/ControleLivros";
import router from "next/router";


const controleEditora = new ControleEditora()
const controleLivro = new ControleLivro()
const baseURL :string =  "http://localhost:3000/api/livros"

async function incluirLivro (livro:Livro) {
    return fetch(baseURL,  {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(livro)
    }).then(response => 'ok')
}

export default function LivroDados () {
    const opcoes = controleEditora.getEditoras()

    const [titulo, setTitulo] = useState<string>('')
    const [resumo, setResumo] = useState<string>('')
    const [autores, setAutores] = useState<string>('')
    const [codEditora, setCodEditora] = useState(opcoes[0].codEditora)

    const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCodEditora(parseInt(event.target.value));
    }

    const incluir = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        const livro = new Livro(titulo, resumo, codEditora, 0, autores.split('\n'))
        controleLivro.incluir(livro)
        router.push('LivroLista')
    }

    return (
       <div>
            <Head>
            </Head>
            <Menu></Menu>
        <main className="container">
            <h1>Inclusão de livro</h1>

            <form onSubmit={incluir} className="mb-4">
                <div className="form-group">
                <label htmlFor="titulo">Título:</label>
                <input type="text" id="titulo" value={titulo} onChange={(event) => setTitulo(event.target.value)} className="form-control"/>
                </div>

                <div className="form-group">
                <label htmlFor="resumo">Resumo:</label>
                <textarea id="resumo" value={resumo} onChange={(event) => setResumo(event.target.value)} className="form-control" />
                </div>

                <div className="form-group">
                <label htmlFor="autores">Autores (1 por linha)</label>
                <textarea id="autores" value={autores} onChange={(event) => setAutores(event.target.value)} className="form-control" />
                </div>

                <div className="form-group">
                <label htmlFor="codEditora">Editora:</label>
                <select id="codEditora" value={codEditora} onChange={tratarCombo} className="form-control">
                {opcoes.map((editora) => {
                                return (
                                /* pega o codigo da editora:*/ <option key={editora.codEditora} value={editora.codEditora}>{editora.nome}</option> 
                                /* pega o nome da editora:  <option key={editora.codEditora} value={editora.nome}>{editora.nome}</option> */
                                /* pega o objeto editora:  <option value={editora}>{editora.nome}</option>*/
                                )
                            })}
                </select>
                </div>

                <button type="submit" className="btn btn-primary"> Salvar Dados </button>
            </form>
        </main>
       </div>
    )
}