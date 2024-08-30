# CapyNews

CapyNews é um portal de notícias construído em React, que permite aos usuários visualizar manchetes de notícias de diferentes categorias e ler artigos diretamente no site.

## Funcionalidades

- **Visualização de Notícias**: Exibe manchetes de notícias de diversas categorias, como Esportes, Tecnologia, etc.
- **Tema Claro/Escuro**: Permite alternar entre o tema claro e escuro.
- **Leitura de Artigos**: Os usuários podem clicar em uma manchete e ler o artigo completo diretamente no site, sem serem redirecionados para o site original.
- **Filtro de Categorias**: Os usuários podem filtrar notícias por categorias específicas.
- **Responsivo**: Layout adaptado para diferentes tamanhos de tela.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface de usuário.
- **React Router**: Para navegação entre as diferentes páginas do site.
- **Axios**: Para realizar as requisições HTTP à API de notícias.
- **NewsAPI**: API utilizada para obter as manchetes de notícias.
- **CSS**: Estilização do projeto, com suporte para temas claro e escuro.

## Como Executar o Projeto

### Pré-requisitos

- Node.js e npm instalados.

### Passos para rodar o projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/oHenryy/CapyNews.git
   ```

2. **Navegue até o diretório do projeto:**

   ```bash
   cd CapyNews
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Configure a API Key do NewsAPI:**

   - No arquivo `src/api.js`, insira sua chave de API do NewsAPI na constante `API_KEY`.

5. **Execute o projeto:**

   ```bash
   npm start
   ```

6. **Acesse o projeto:**

   Abra o navegador e acesse `http://localhost:3000`.

## Estrutura de Pastas

```
CapyNews/
│
├── public/              # Arquivos públicos
│
├── src/                 # Código fonte do projeto
│   ├── components/      # Componentes reutilizáveis do projeto
│   │   ├── CategoryFilter.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── NewsCard.js
│   │   └── NewsList.js
│   ├── pages/           # Páginas do projeto
│   │   ├── Article.js
│   │   ├── Category.js
│   │   └── Home.js
│   ├── api.js           # Configuração da API
│   ├── App.css          # Estilos globais e temas
│   ├── App.js           # Arquivo principal do React
│   ├── index.js         # Ponto de entrada da aplicação
│   └── index.css        # Estilos globais
│
├── .gitignore           # Arquivos e diretórios ignorados pelo Git
├── package.json         # Configurações e dependências do npm
└── README.md            # Documentação do projeto
```

## Considerações Finais

Este projeto foi criado como um exemplo de portal de notícias usando React e a API do NewsAPI. Sinta-se à vontade para contribuir, sugerir melhorias ou utilizar este código como base para outros projetos.

**Nota**: Para obter sua chave de API do NewsAPI, visite [NewsAPI.org](https://newsapi.org/) e crie uma conta.
