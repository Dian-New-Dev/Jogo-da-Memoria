# Projeto Web-Game: O Vigésimo

## Descrição

- Jogo da memória com narrativa imersiva e intrigante.
- Jogo de navegador, feito em react.
- Mistura de puzzle com rogue-like.

## Planejamento

### Protótipo

1) Criar um protótipo de jogo da memória
- escalável (cada fase do jogo aumentará o número de itens a memorizar);
- começar com 4 cartas;

2) Estilizar o painel de jogo
- Adicionar o background da pirâmide;
- Adicionar os personagens usados nas cartas;
- Adicionar animações: carta virando, carta descoberta.

3) Introduzir mecânica de tempo
- Iniciar com 10 segundos, para teste rápido;

4) Introduzir elementos de áudio
- Efeitos sonoros para manipulação das cartas;
- Efeito sonoro para carta descoberta;
- Som ambiente de deserto, dunas, areia;
- Música apropriada para uma experiência relaxante (níveis iniciais);
- Efeito sonoro indicando tempo acabando (aplicar a partir de 5 segundos).

### Progressão

1) Tornar o conteúdo de cada fase um item de um array

2) Criar lógica para "cyclo through" fases
- Cada fase é um componente diferente
- A informação de todas as fases armazenadas em um array

3) Inserir indicador visual de fase

4) Inserir apresentação para cada fase
- "Fase 1", "Fase 2", etc

5) Inserir animação de transição entre fases
- Mover-se de um andar da pirâmide até outro

### Elementos extra-jogo

1) Criar um menu

### Narrativa

1) Criar um painel inicial introduzindo a premissa da história

* Painel1
- O Reino agoniza.

- Outrora o coração pulsante de nossa civilização, hoje ele apodrece moribundo sob o olhar indiferente dos deuses.

*Painel2
- Sem água para matar a sede ou para cultivar o alimento de cada, o povo cadavérico e raquítico se aglomera em volta do palácio. Seus corpos morrem segundo após segundo, agarrando-se à esperança de que seu Faraó convencerá os deuses a lhes devolver o Nilo.

*Painel3
- Mas mesmo nos corredores do palácio, a fome e a sede correm de mãos dadas com o fantasma da morte. De morte em morte, a corte do Faraó se desintegra. Mesmo o mais forte dos generais luta para se manter de pé sobre pernas finais, e até o mais brilhante dos escribas luta em vão contra a loucura.

*Painel4
- Sem opções, nosso Faraó tenta uma vez mais. Lhe escolhendo a dedo da multidão lá embaixo, sem critério outro que a confiança nos desígnios dos deuses, o faraó lhe encarrega, a um só passo, da mais nobre missão e da mais perversa das sentenças.

*Painel5
- Dezenove outros tentaram antes de você, nenhum retornou. Mas onde eles resistiram, apavorados, você aceitou com orgulho. Escolhido pelos deuses, você desbrava o deserto em busca de água.

- Você é o Vigésimo. A última esperança do Reino.

2) Criar um painel ativável logo após iniciar o jogo
- Vem após sair do menu
- Informa que o personagem encontrou a pirâmide e foi desafiado a subí-la

3) Apresentar as cartas antes de cada estágio
- Cada carta contém um persoangem inicialmente aleatório, mas cuja relevância aparecerá eventualmente

## Aprendizado

* CSS: z-index não funciona em elementos que não tenham algum position delcarado (o padrão é static, o qual bloqueia o z-index)

* React tem um método análogo ao transitionEnd do JS: onTransitionEnd. O efeito é o mesmo mas sem manipulação direta do DOM

* Usar console.log para verificar o fluxo do código em React é confuso, pois o log registra valores antes do componente re-renderizar, mostrando sempre um valor desatualizado.

## A Implementar

* prop useState no pai passado para o ultimo componentr da intro avisando o pai que deve esconder a componente da intro quando esta terminar

* importar o seguinte pacote

https://www.npmjs.com/package/react-type-animation

para animação de máquina de escrever nas caixas de diálogo

* mecanica de jogo: os antagonistas ficam mais fortes (atiram mais, maior AoE, etc) a cada par de cartas virada (ou seja, quanto mais o jogador vira sem conseguir pares, mais dificil o jogo fica)

## Audio

* Intro: https://www.youtube.com/watch?v=tyFvpDLqRiA&list=PLfP6i5T0-DkK9jisqW81AF4N8pljQLagE&index=2

* Estágios inicias: https://www.youtube.com/watch?v=ikicj6xzvPM&list=PLfP6i5T0-DkK9jisqW81AF4N8pljQLagE

* Estágios intermediários (a partir dos 4 min): https://www.youtube.com/watch?v=tyFvpDLqRiA&list=PLfP6i5T0-DkK9jisqW81AF4N8pljQLagE&index=2

* Estágios misteriosos: https://www.youtube.com/watch?v=S7k5ev7pJ9k&list=PLfP6i5T0-DkK9jisqW81AF4N8pljQLagE&index=9

* Estágios mais frenéticos: https://www.youtube.com/watch?v=cxVXdnzX57o&list=PLfP6i5T0-DkK9jisqW81AF4N8pljQLagE&index=10

* Chefões: https://www.youtube.com/watch?v=KBfo1OW_wZA&list=PLfP6i5T0-DkK9jisqW81AF4N8pljQLagE&index=12