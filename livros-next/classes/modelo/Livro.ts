import React from 'react'

export class Livro {
	titulo: string;
    resumo:string;
	codEditora: number;
    codigo:number;
    autores:string[];
	
	constructor(titulo: string, resumo:string, codEditora: number, codigo:number, autores:string[]){
		this.titulo = titulo;
        this.resumo = resumo;
		this.codEditora = codEditora;
        this.codigo = codigo;
        this.autores = autores;
	}
}
