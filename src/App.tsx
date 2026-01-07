import { useState } from "react";
import "./App.css";

function App() {
  const [textoFrase, setTextoFrase] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  const allFrases = [
    {
      id: 1,
      nome: "Ética & Caráter",
      frases: [
        "A ética é o que você faz quando ninguém está olhando.",
        "Integridade é manter a palavra mesmo quando traz prejuízo.",
        "A verdade não precisa de defesa, apenas de testemunhas.",
        "O caráter de um homem é o seu destino.",
        "Respeito é o reconhecimento do valor intrínseco do outro.",
        "A liberdade termina onde o dever começa.",
        "Seja a mudança que você deseja ver nas instituições.",
        "A justiça sem misericórdia é tirania; a misericórdia sem justiça é fraqueza.",
        "Honestidade é o primeiro capítulo do livro da sabedoria.",
        "O maior erro é tentar ser importante em vez de ser útil.",
        "A reputação é o que os outros pensam; o caráter é o que Deus sabe.",
        "Não faça aos outros o que você não gostaria que fizessem com você.",
        "Valores não são para serem ditos, são para serem vividos.",
        "A verdadeira grandeza reside em servir sem esperar aplausos.",
        "Educar a mente sem educar o coração não é educação.",
        "A humildade é o alicerce de todas as virtudes.",
        "O silêncio diante da injustiça é cumplicidade.",
        "Quem não vive para servir, não serve para viver.",
        "A ética nos protege de nós mesmos.",
        "Lealdade é uma pérola rara que não se encontra em mercados comuns.",
        "A consciência é o melhor travesseiro.",
        "O bem comum deve sempre prevalecer sobre o interesse egoísta.",
        "Pequenas concessões éticas levam a grandes ruínas morais.",
        "A transparência é a cura para a corrupção do espírito.",
        "Seja coerente entre o que você prega e o que você pratica.",
        "A força não vem da capacidade física, mas de uma vontade indomável pelo que é certo.",
        "O perdão liberta o ofendido da prisão do ofensor.",
        "A gratidão é a memória do coração.",
        "A sabedoria começa na reflexão sobre as próprias falhas.",
        "Não confunda sucesso com valor.",
        "A gentileza é o idioma que o surdo ouve e o cego vê.",
        "Compromisso é fazer o que você disse que faria, muito tempo depois de o sentimento passar.",
        "A moderação é a chave para uma vida equilibrada.",
        "Nunca sacrifique seus princípios por conveniência.",
        "A coragem é a resistência ao medo, não a ausência dele.",
        "A generosidade enriquece quem dá mais do que quem recebe.",
        "Respeitar o tempo do outro é uma forma de caridade.",
        "O conhecimento nos dá poder, mas o caráter nos dá respeito.",
        "A verdade dita com malícia é pior que a mentira.",
        "Ninguém é tão pobre que não possa dar um sorriso, nem tão rico que não precise de um.",
        "A paciência é a companhia da sabedoria.",
        "Sê fiel no pouco e serás colocado sobre o muito.",
        "A inveja é a homenagem que a mediocridade presta ao talento.",
        "Busque a excelência, não a perfeição.",
        "O trabalho dignifica o homem, mas o descanso o restaura.",
        "A maior vitória é vencer a si mesmo.",
        "Ame a verdade, mas perdoe o erro.",
        "O caráter é formado nas tempestades da vida.",
        "Saber ouvir é uma arte ética.",
        "Deixe o mundo um pouco melhor do que você o encontrou.",
      ],
    },
    {
      id: 2,
      nome: "Psicologia & Mente",
      frases: [
        "Conheça todas as teorias, mas ao tocar uma alma humana, seja apenas outra alma.",
        "Onde o amor falta, o medo assume o controle.",
        "O que você nega, te submete. O que você aceita, te transforma.",
        "Saúde mental não é ausência de problemas, mas a habilidade de lidar com eles.",
        "Sua percepção do mundo é um reflexo do seu estado interior.",
        "Ninguém pode fazer você se sentir inferior sem o seu consentimento.",
        "A cura começa quando a dor é ouvida.",
        "Não somos o que pensamos ser, somos o que fazemos com o que pensam de nós.",
        "O autoconhecimento é o início da liberdade.",
        "A ansiedade é o excesso de futuro; a depressão é o excesso de passado.",
        "Validar o sentimento do outro é o maior ato de empatia.",
        "Você não é seus pensamentos; você é o observador deles.",
        "Os traumas que não transformamos, repetimos.",
        "A resiliência é a arte de navegar em tempos difíceis.",
        "Seja gentil com você mesmo; você está fazendo o melhor que pode.",
        "Limites são necessários para preservar o amor-próprio.",
        "O silêncio também é uma resposta.",
        "Mudar o pensamento é mudar o destino.",
        "A comparação é a ladra da alegria.",
        "Tudo o que nos irrita nos outros pode nos levar a uma compreensão de nós mesmos.",
        "A felicidade é um estado de espírito, não um destino.",
        "Acolha sua vulnerabilidade; nela reside sua força.",
        "Pensamentos negativos são como pássaros: você não pode impedi-los de voar, mas pode impedi-los de fazer ninho.",
        "O luto é o preço que pagamos por amar.",
        "A maturidade começa quando você assume a responsabilidade pela sua felicidade.",
        "Nossas feridas são as aberturas por onde a luz entra.",
        "O medo é uma reação; a coragem é uma decisão.",
        "Não deixe que o barulho das opiniões alheias cale sua voz interior.",
        "A aceitação não é resignação, é o ponto de partida para a mudança.",
        "Escutar é muito mais do que apenas ouvir palavras.",
        "Cada pessoa que você encontra está travando uma batalha que você não conhece.",
        "O equilíbrio emocional é a âncora da alma.",
        "A mente é um excelente servo, mas um mestre terrível.",
        "Curar-se requer coragem para sentir o que dói.",
        "O perdão a si mesmo é o passo mais difícil e o mais necessário.",
        "Suas emoções são bússolas, não destinos.",
        "A solitude é o prazer de estar consigo mesmo; a solidão é o sofrimento.",
        "Não tente consertar as pessoas; apenas as ame enquanto elas se consertam.",
        "A flexibilidade mental é um sinal de inteligência.",
        "Crescer dói, mas nada dói tanto quanto ficar preso onde você não pertence.",
        "O agora é o único lugar onde a vida acontece.",
        "Sua mente acredita em tudo o que você diz a ela. Fale coisas boas.",
        "O hábito é o que nos mantém indo.",
        "A inteligência emocional vale mais que o QI.",
        "Respire. É apenas um dia ruim, não uma vida ruim.",
        "O diálogo é a ponte entre dois mundos interiores.",
        "Aprenda a dizer não sem se sentir culpado.",
        "O sucesso interior precede o sucesso exterior.",
        "Ninguém é normal visto de perto.",
        "A paz interior começa no momento em que você decide não permitir que outra pessoa controle suas emoções.",
      ],
    },
    {
      id: 3,
      nome: "Evangelho & Fé",
      frases: [
        "Onde abundou o pecado, superabundou a graça.",
        "Fé não é acreditar que Deus vai fazer o que você quer, mas que Ele fará o que é melhor.",
        "A oração não muda a Deus, muda quem ora.",
        "O Reino de Deus não consiste em palavras, mas em poder e amor.",
        "Deus não escolhe os capacitados, Ele capacita os escolhidos.",
        "O amor de Deus é a única força capaz de transformar um inimigo em irmão.",
        "A cruz é o lembrete de que você vale o sangue de Cristo.",
        "Descansa no Senhor e espera n'Ele.",
        "A fé é o firme fundamento das coisas que se esperam.",
        "Quem ganha sua vida a perderá, mas quem a perde por amor a Cristo a achará.",
        "O maior no Reino é aquele que serve.",
        "Não andeis ansiosos por coisa alguma; entregue seus caminhos ao Pai.",
        "A graça é um favor imerecido que nos dá o que não poderíamos conquistar.",
        "Busquem primeiro o Reino de Deus, e as demais coisas serão acrescentadas.",
        "A alegria do Senhor é a nossa força.",
        "Mesmo no vale da sombra da morte, o Bom Pastor está comigo.",
        "O Evangelho é boas novas para os aflitos e cura para os quebrantados.",
        "Nada pode nos separar do amor de Deus que está em Cristo Jesus.",
        "Ser cristão é ser um pequeno Cristo no mundo.",
        "Deus está perto dos que têm o coração quebrantado.",
        "A verdade vos libertará.",
        "O perdão é a chave que abre a porta do céu em nosso coração.",
        "Não se amoldem ao padrão deste mundo, mas transformem-se pela renovação da mente.",
        "A esperança que vem de Deus não nos decepciona.",
        "Amar a Deus sobre todas as coisas e ao próximo como a si mesmo.",
        "Tudo posso Naquele que me fortalece.",
        "O Senhor é o meu pastor e nada me faltará.",
        "A paz de Deus excede todo o entendimento.",
        "Seja luz no mundo e sal na terra.",
        "Deus trabalha no silêncio e age na hora certa.",
        "Mil cairão ao teu lado, mas tu não serás atingido.",
        "A glória desta última casa será maior que a da primeira.",
        "O choro pode durar uma noite, mas a alegria vem pela manhã.",
        "Fiel é Aquele que prometeu.",
        "Sem fé é impossível agradar a Deus.",
        "As misericórdias do Senhor se renovam a cada manhã.",
        "O coração do homem planeja seu caminho, mas o Senhor dirige seus passos.",
        "A soberba precede a queda, mas a humildade precede a honra.",
        "Não fomos chamados para julgar o mundo, mas para amá-lo até que ele pergunte por quê.",
        "O Evangelho não é uma religião, é um relacionamento.",
        "Para Deus, nada é impossível.",
        "Se Deus é por nós, quem será contra nós?",
        "Vinde a mim todos os que estais cansados e oprimidos.",
        "Deus não olha para a aparência, mas para o coração.",
        "A fé sem obras é morta.",
        "Somos embaixadores de Cristo nesta terra.",
        "Onde dois ou três estiverem reunidos em Seu nome, Ele ali estará.",
        "A bondade e a misericórdia me seguirão todos os dias da minha vida.",
        "Sê forte e corajoso; não temas, pois o Senhor teu Deus é contigo.",
        "A coroa da vida é dada aos que perseveram na fé.",
      ],
    },
  ];

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index);
  }

  function gerarFrase() {
    const numeroAleatorio = Math.floor(
      Math.random() * allFrases[categoriaSelecionada].frases.length
    );
    setTextoFrase(
      `"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`
    );
  }

  return (
    <div className="container">
      {/* TEXTO ATRAENTE SUBSTITUINDO A IMAGEM */}
      <header className="header-text">
        <h1 className="main-title">
          PNEU<span className="highlight">MA</span>
        </h1>
        <p className="subtitle">
          O sopro de sabedoria para sua mente e espírito
        </p>
      </header>

      <h2 className="title">Categorias</h2>

      <section className="category-area">
        {allFrases.map((item, index) => (
          <button
            key={item.id}
            className="category-button"
            style={{
              borderWidth:
                item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: "#1fa4db",
            }}
            onClick={() => handleSwitchCategory(index)}
          >
            {item.nome}
          </button>
        ))}
      </section>
      <p className="instruction-text">
        Clique no botão abaixo para gerar uma frase de{" "}
        {allFrases[categoriaSelecionada].nome}:
      </p>

      <button className="button-frase" onClick={gerarFrase}>
        Gerar frase
      </button>

      {textoFrase !== "" && <p className="textoFrase">{textoFrase}</p>}

      <footer className="footer">
        <div className="text-apoio">
          <h3>☕ Gostou do projeto?</h3>
          <p>Se este trabalho te ajudou, considere me pagar um café!</p>

          <a
            href="https://mpago.la/1kz2Yay"
            target="_blank"
            className="ask-coffee"
          >
            <span>☕</span>
            Me paga um café?
          </a>
        </div>
        <span>By Leo Gomes Developer</span>
      </footer>
    </div>
  );
}

export default App;
