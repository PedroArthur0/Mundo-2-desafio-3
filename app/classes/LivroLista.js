"use client";
import React, { useState, useEffect } from 'react';
import ControleLivros from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';

export default function LivroLista() {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);
  const controleLivro = new ControleLivros();
  const controleEditora = new ControleEditora();

  useEffect(() => {
    setLivros(controleLivro.obterLivros());
    setCarregado(true);
  }, []);

  const excluirLivro = (codigo) => {
    controleLivro.excluir(codigo);
    setLivros(controleLivro.obterLivros());
  };

  return (
    <main>
      <h1>Catálogo</h1>
      {carregado ? (
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Título</th>
              <th>Resumo</th>
              <th>Autores</th>
              <th>Editora</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <tr key={livro.codigo}>
                <td>{livro.titulo}
                  <button className="btn btn-sm btn-danger" onClick={() => excluirLivro(livro.codigo)}>
                  Excluir
                  </button>
                </td>
                <td>{livro.resumo}</td>
                <td>{livro.autores.join(', ')}</td>
                <td>{controleEditora.getNomeEditora(livro.codEditora)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Carregando...</p>
      )}
    </main>
  );
}
