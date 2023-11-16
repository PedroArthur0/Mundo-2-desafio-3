import Livro from '../modelos/Livro';

class ControleLivros {
  livros: Livro[];

  constructor() {
    this.livros = [
      new Livro(1, 1, 'Use a Cabeça: Java', 'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java. Projetado de acordo com princípios de aprendizado simples, este livro mostrará de aspectos básicos da linguagem a tópicos avançados que incluem segmentos, soquetes de rede e programação distribuída.', ['Bert Bates', 'Kathy Sierra']),
      new Livro(2, 2, 'Java, como Programar', 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel®. Java: como programar, 10ª edição, fornece uma introdução clara, simples, envolvente e divertida à programação Java com ênfase inicial em objetos.', ['Paul Deitel', 'Harvey Deitel']),
      new Livro(3, 3, 'Core Java for the Impatient', 'The release of Java SE 8 introduced significant enhancements that impact the Core Java technologies and APIs at the heart of the Java platform. Many old Java idioms are no longer required and new features like lambda expressions will increase programmer productivity, but navigating these changes can be challenging.', ['Cay Horstmann']),
    ];
  }

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const ultimoCodigo = Math.max(...this.livros.map(l => l.codigo));
    livro.codigo = ultimoCodigo + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}

export default ControleLivros;
