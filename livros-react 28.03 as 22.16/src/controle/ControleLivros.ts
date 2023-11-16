import {Livro} from "../modelo/Livro";
import { useState } from "react";


//const [livros, setLivros] = useState<Array<Livro>>([
export const livros:Array<Livro> = [
    {titulo: 'Prática Jurídica - Constitucional', 
    resumo:'Esta obra tem por objetivo auxiliar os bacharéis em direito e os profissionais da área jurídica na compreensão da teoria e prática do direito constitucional. Possui os temas recorrentes na prova da Ordem dos Advogados do Brasil (OAB) e nos concursos públicos. São tratadas de modo objetivo e atualizado as questões dissertativas e as peças processuais já realizadas pela OAB. A experiência do autor, que atua há mais de vinte anos preparando alunos para a OAB e concursos, ajuda na visão precisa daquilo que é necessário para o sucesso dos discentes. O leitor conta com uma ferramenta de estudo indispensável para alcançar a aprovação no Exame de Ordem.', 
    codEditora: 1, 
    codigo:1, 
    autores:['Oliveira, Erival Da Silva']
},
    {titulo: 'A Bíblia da Gravidez - a Segunda G', 
    resumo:'Conceber e gerar um segundo filho nem sempre é mais fácil ou mesmo tão fácil quento a primeira gravidez. Durante cada estágio do processo - concepção, gravidez, parto e nascimento -, haverá experiências diferentes. Sua capacidade de conceber uma criança saudável e ter um parto normal, o risco de sofrer complicações relacionadas à gravidez', 
    codEditora: 2, 
    codigo:2, 
    autores:['Wladimir Taborda','Mariano Tamura','Alice D.']
},
    {titulo:'Box Drácula - A estaca de Bram Stoker' , 
    resumo:'BOX ESPECIAL DE UM DOS AUTORES MAIS IMPORTANTES DA LITERATURA DE HORROR. Bram Stoker cravou profundamente seu nome na história. Sua mais ilustre criação, o Conde Drácula, ultrapassou o universo da literatura e tornou-se parte integrante de nossa cultura. Não há quem não conheça o vampiro e, de algum modo, não tenha se aterrorizado com ele. Este box exclusivo reúne a obra-prima do autor, DRÁCULA, e uma arrepiante coletânea de contos, O HÓSPEDE DE DRÁCULA E OUTROS CONTOS ESTRANHOS. Além disso, acompanha um suplemento de leitura assinado pela sempre afiada pena do escritor e pesquisador Oscar Nestarez e um pôster assustador do talentoso Gustavo Sazes, que também ilustrou as capas. A ESTACA DE BRAM STOKER é um golpe incisivo e penetrante no coração dos leitores. INCLUI PÔSTER, MARCADOR E SUPLEMENTO ILUSTRADO COM CONTEÚDO EXCLUSIVO ESCRITO POR OSCAR NESTAREZ.', 
    codEditora: 3, 
    codigo:3, 
    autores:['Stoker, Bram']
},
    {titulo: 'Belas adormecidas', 
    resumo:'Pelo mundo todo, algo de estranho começa a acontecer quando as mulheres adormecem: elas são imediatamente envoltas em casulos. Se despertadas, se o casulo é rasgado e os corpos expostos, as mulheres se tornam bestiais, reagindo com fúria cega antes de voltar a dormir. Em poucos dias, quase cem por cento da população mundial feminina pegou no sono. Sozinhos e desesperados, os homens se dividem entre os que fariam de tudo para proteger as mulheres adormecidas e aqueles que querem aproveitar a crise para instaurar o caos. Grupos de homens formam as Brigadas do Maçarico, incendeiam em massa casulos, e em diversas partes do mundo guerras parecem prestes a eclodir. Mas na pequena cidade de Dooling as autoridades locais precisam lidar com o único caso de imunidade à doença do sono: Evie Black, uma mulher misteriosa com poderes inexplicáveis. Escrito por Stephen King e Owen King, Belas Adormecidas é um livro provocativo, dramático e corajoso, que aborda temas cada vez mais urgentes e relevantes.', 
    codEditora: 4, 
    codigo:4, 
    autores:['King, Stephen', 'King, Owen', 'Winarski, Regiane']
},
    {titulo: 'ETICA APLICADA - AMBIENTE', 
    resumo:'CINEMA ESTETICA POLITICA E DIMENSOES DA MEMORIA em desenvolvimento.', 
    codEditora: 5, 
    codigo:5, 
    autores:['Maria do Ceu Patrao Neves','Viriato Soromenho-Marques']
}
];

export default class ControleLivro{

    obterLivros = () => {
        return livros
    };

    incluir = (livroObj:Livro) => {
        var codigoNovo = livros.length + 1
        livroObj.codigo = codigoNovo
        livros.push(livroObj)
        console.log(livros)
        //return livros
    };

   
/*
    incluir2 = (livro:Livro) => {
        const [newLista, setNewLista] = useState(livros)
        var codigoNovo:number = livros.length + 1 // COMEÇAR DAQUI !!!
        livro.codEditora = codigoNovo
        livros.push(livro) 
        setNewLista(livros)
        return newLista.length
    };
 */

    excluir = (codigoLivro:number) => {
        
        var indexResult = livros.findIndex((x) => x.codEditora === codigoLivro);
        return livros.splice(indexResult, 1);
    };

}