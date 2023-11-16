import  {Editora}  from "../modelo/Editora";

const editoras: Array<Editora> = [
    {codEditora:1, nome:'Companhia das Letras'},
    {codEditora:2, nome:'Rocco'},
    {codEditora:3, nome:'Arqueiro'},
    { codEditora:4, nome:'Sextante'},
    {codEditora:5, nome:'FTD'}
];

export default class ControleEditora {
    getNomeEditora = (codEditora:number) => {
          const nomeEditora = editoras.filter(e => (e.codEditora === codEditora));
          return nomeEditora[0].nome
          //return 'ok'
	}

    getEditoras =() => {
        return editoras
            
	}
};

