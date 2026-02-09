# 🐾 Sistema de Animais de Estimação
[![GitHub Pages](https://img.shields.io/badge/🌐-Site%20Online-blue?style=for-the-badge)](https://leandrostanger.github.io/SistemaDeAnimaisDeEstimacao/)
[![GitHub](https://img.shields.io/badge/📂-Repositório-black?style=for-the-badge)](https://github.com/LeandroStanger/SistemaDeAnimaisDeEstimacao)

Um catálogo estático e responsivo que exibe uma lista de animais de estimação, apresentando informações básicas como nome, espécie, idade, peso e nível de energia em uma interface web amigável.

## 📝 Descrição

Este projeto é uma aplicação front-end que funciona como um catálogo ou página de apresentação para animais de estimação. Seu objetivo principal é **exibir informações de maneira organizada e visualmente atrativa** diretamente no navegador. Ele foi desenvolvido como um projeto de interface, ideal para portfólios, demonstrações de conceito ou como base para sistemas mais complexos de gerenciamento.

## 🚀 Acesso Online
Visite o site diretamente através do GitHub Pages:  
**[https://leandrostanger.github.io/AnimaisNoZoologico/](https://leandrostanger.github.io/SistemaDeAnimaisDeEstimacao/)**

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web padrão (front-end), sem a utilização de frameworks ou bibliotecas externas.

*   **HTML5**: Estrutura semântica da página web.
*   **CSS3**: Estilização completa da interface, incluindo layout responsivo (Flexbox/Grid), cores, tipografia e efeitos visuais nos cards.
*   **JavaScript (Vanilla)**: Lógica para buscar e renderizar dinamicamente os dados dos animais a partir de um arquivo JSON estático.
*   **JSON (`dados.json`)**: Fonte de dados estática que contém o array de objetos com as informações de todos os animais.

## 📂 Estrutura do Projeto

A estrutura do projeto é minimalista e direta, contendo todos os arquivos necessários na raiz do repositório.

```
SistemaDeAnimaisDeEstimacao/
├── index.html          # Ponto de entrada da aplicação. Contém a estrutura HTML básica.
├── style.css           # Arquivo de estilos. Define toda a aparência visual da página.
├── script.js           # Arquivo de lógica JavaScript. Responsável por carregar e exibir os dados.
├── dados.json          # Fonte de dados. Um arquivo JSON com a lista completa de animais.
└── README.md           # Este arquivo de documentação.
```

## ⚙️ Funcionalidades

Com base na análise do código, as funcionalidades implementadas são:

1.  **Exibição de Catálogo**: Apresenta uma lista de animais (pets) em um layout de grid responsivo.
2.  **Cartões Informativos (Cards)**: Cada animal é exibido em um card individual contendo:
    *   Nome do animal
    *   Espécie (ex: cachorro, gato, coelho)
    *   Idade
    *   Peso
    *   Indicador visual (barra de progresso) do nível de "Energia".
3.  **Design Responsivo**: A interface se adapta a diferentes tamanhos de tela (desktop, tablet e mobile), reorganizando o número de cards por linha.
4.  **Carga Dinâmica de Dados**: Os dados dos animais são fetcheados do arquivo `dados.json` e renderizados na tela pelo JavaScript, separando claramente os dados da apresentação.

## 🔧 Como Executar o Projeto

Este é um projeto estático que não requer compilação, instalação de dependências ou a execução de um servidor back-end.

### Passo a Passo:

1.  **Clone o repositório** para sua máquina local:
    ```bash
    git clone https://github.com/LeandroStanger/SistemaDeAnimaisDeEstimacao.git
    ```
2.  **Acesse a pasta do projeto**:
    ```bash
    cd SistemaDeAnimaisDeEstimacao
    ```
3.  **Abra o arquivo `index.html`** diretamente em qualquer navegador web moderno (Chrome, Firefox, Edge, Safari).
    *   Você pode fazer isso dando um duplo clique no arquivo no explorador de arquivos do seu sistema.


## 👤 Autor

**Leandro Stanger**

*   GitHub: [@LeandroStanger](https://github.com/LeandroStanger)
*   Projeto Ativo: [Sistema de Animais de Estimação](https://github.com/LeandroStanger/SistemaDeAnimaisDeEstimacao)
*   Demonstração Online: [https://leandrostanger.github.io/SistemaDeAnimaisDeEstimacao/](https://leandrostanger.github.io/SistemaDeAnimaisDeEstimacao/)
```
