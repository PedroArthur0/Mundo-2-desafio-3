import  {Editora}  from "../modelo/Editora";

const editoras: Array<Editora> = [
    {nome:'Companhia das Letras', codEditora:1},
    {nome:'Rocco', codEditora:2},
    {nome:'Arqueiro', codEditora:3},
    {nome:'Sextante', codEditora:4},
    {nome:'FTD ', codEditora:5}
];

export default class ControleEditora {
    getNomeEditora = (codEditora:number) => {
          const nomeEditora = editoras.filter(e => (e.codEditora === codEditora));
          return nomeEditora[0].nome
	}

    getEditoras =() => {
        return editoras
            
	}
};

