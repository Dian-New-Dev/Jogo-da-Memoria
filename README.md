# Projeto Web-Game: O Vigésimo / The Twentieth

## Descrição

- Jogo da memória com narrativa imersiva e intrigante.
- Jogo de navegador, feito em react.
- Mistura de puzzle com rogue-like.
- O elemento rogue-like ficará para o futuro (possível integração com Framer ou outra ferramenta);

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
- feito: cada fase tem um css grid diferente que organiza de maneira específica as cartas de acordo com o núnero;

2) Criar lógica para "cycle through" fases
- Cada fase é um componente diferente
- A informação de todas as fases armazenadas em um array
- feito

3) Inserir indicador visual de fase
- a fazer

4) Inserir apresentação para cada fase
- "Fase 1", "Fase 2", etc
- feito

5) Inserir animação de transição entre fases
- Mover-se de um andar da pirâmide até outro
- possivelmente deprecado

### Narrativa

1) Criar um painel inicial introduzindo a premissa da história

feito

2) Criar um painel ativável logo após iniciar o jogo
- Vem após sair do menu
- Informa que o personagem encontrou o livro e foi desafiado
- feito

3) Apresentar as cartas antes de cada estágio
- Cada carta contém um persoangem inicialmente aleatório, mas cuja relevância aparecerá eventualmente
- feito de forma diferente: as cartas novas são apresentadas após cada fase;

## Aprendizado

* CSS: z-index não funciona em elementos que não tenham algum position delcarado (o padrão é static, o qual bloqueia o z-index)

* React tem um método análogo ao transitionEnd do JS: onTransitionEnd. O efeito é o mesmo mas sem manipulação direta do DOM

* Usar console.log para verificar o fluxo do código em React é confuso, pois o log registra valores antes do componente re-renderizar, mostrando sempre um valor desatualizado.

* Mesmo quando a lógica parece funcionar localmente, ela pode se comportar de maneira diferente após o deploy.

* Se algum recurso não estiver carregando no deploy e o pathing estiver correto, o problema é a lógica.

## A Implementar

- mecanica de jogo: os antagonistas ficam mais fortes (atiram mais, maior AoE, etc) a cada par de cartas virada (ou seja, quanto mais o jogador vira sem conseguir pares, mais dificil o jogo fica)

- não está renderizando após deploy: imagens e texto da intro;
- favicon

## Recursos usados até agora:

- pacote para animação de maquina de escrever: 

https://www.npmjs.com/package/react-type-animator

- música da intro

https://www.youtube.com/watch?v=tyFvpDLqRiA

- musica da descrição

https://freesound.org/people/TheoJT/sounds/511198/

## Audio

* Intro: https://www.youtube.com/watch?v=tyFvpDLqRiA&list=PLfP6i5T0-DkK9jisqW81AF4N8pljQLagE&index=2

* Estágios inicias: https://www.youtube.com/watch?v=ikicj6xzvPM&list=PLfP6i5T0-DkK9jisqW81AF4N8pljQLagE

* Estágios intermediários (a partir dos 4 min): https://www.youtube.com/watch?v=tyFvpDLqRiA&list=PLfP6i5T0-DkK9jisqW81AF4N8pljQLagE&index=2

* Estágios misteriosos: https://www.youtube.com/watch?v=S7k5ev7pJ9k&list=PLfP6i5T0-DkK9jisqW81AF4N8pljQLagE&index=9

* Estágios mais frenéticos: https://www.youtube.com/watch?v=cxVXdnzX57o&list=PLfP6i5T0-DkK9jisqW81AF4N8pljQLagE&index=10

* Chefões: https://www.youtube.com/watch?v=KBfo1OW_wZA&list=PLfP6i5T0-DkK9jisqW81AF4N8pljQLagE&index=12