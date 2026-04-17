# 🎬 Turismos - Filmes e Séries

Um aplicativo mobile desenvolvido em React Native com Expo que permite explorar e descobrir informações sobre filmes e séries.

## 📱 Funcionalidades

- **Catálogo de Filmes**: Visualize uma lista completa de filmes com detalhes como sinopse, gênero e pôster
- **Catálogo de Séries**: Explore diferentes séries disponíveis
- **Detalhes Completos**: Acesse informações detalhadas de filmes e séries ao clicar em qualquer item
- **Navegação por Abas**: Alterne facilmente entre Filmes e Séries
- **Menu Lateral**: Acesso rápido às principais seções (Início, Sobre, Contato)
- **Página Inicial**: Bem-vindo com instruções de uso
- **Página Sobre**: Informações sobre o aplicativo
- **Página de Contato**: Conecte-se via email, GitHub e LinkedIn

## 🛠️ Requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- Expo CLI (`npm install -g expo-cli`)

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/arthurmorais0227/projeto-du-2.git
cd "arthur-turismos/series e filmes"
```

2. Instale as dependências:
```bash
npm install
```

## 🚀 Como Usar

### Iniciar o aplicativo

Para iniciar o servidor de desenvolvimento:
```bash
npm start
```

### Executar em diferentes plataformas

**Android:**
```bash
npm run android
```

**iOS:**
```bash
npm run ios
```

**Web:**
```bash
npm run web
```

Após executar um dos comandos acima, você verá um código QR. Escaneie com o app Expo no seu celular para visualizar o aplicativo.

## 📁 Estrutura do Projeto

```
arthur-turismos/series e filmes/
├── App.js                          # Componente principal com navegação
├── index.js                        # Ponto de entrada
├── app.json                        # Configurações do Expo
├── package.json                    # Dependências e scripts
├── assets/                         # Ícones e imagens
│   ├── icon.png
│   ├── splash-icon.png
│   ├── adaptive-icon.png
│   └── favicon.png
├── data/                           # Dados dos filmes e séries
│   ├── filmes.json                 # Catálogo de filmes
│   └── series.json                 # Catálogo de séries
└── src/
    └── screens/                    # Telas do aplicativo
        ├── InicioScreen.js         # Tela de boas-vindas
        ├── FilmesScreen.js         # Lista de filmes
        ├── SeriesScreen.js         # Lista de séries
        ├── DetalhesScreen.js       # Detalhes de filme/série
        ├── SobreScreen.js          # Informações sobre o app
        └── ContatoScreen.js        # Contato e redes sociais
```

## 🎨 Design e Tema

O aplicativo utiliza um tema escuro elegante com as seguintes cores:

- **Cor Primária**: `#b5dafe` (Azul claro)
- **Fundo Principal**: `#141414` (Preto profundo)
- **Cards**: `#1f1f1f` (Preto suave)
- **Texto Primário**: `#fff` (Branco)
- **Texto Secundário**: `#aaa` / `#ddd` (Cinza)

## 🧭 Navegação

A aplicação possui três tipos de navegação:

1. **Drawer Navigator**: Menu lateral com acesso às principais seções
2. **Bottom Tab Navigator**: Abas na parte inferior para alternar entre Filmes e Séries
3. **Stack Navigator**: Navegação em pilha para exibir detalhes ao clicar em um item

### Estrutura de Menu

```
Drawer Menu
├── Início (Página de boas-vindas)
├── Filmes
│   └── Detalhes (ao clicar em um filme)
├── Séries
│   └── Detalhes (ao clicar em uma série)
├── Sobre
└── Contato
```

## 🎯 Funcionalidades Detalhadas

### Tela Inicial
- Ícone de play formatado
- Mensagem de boas-vindas
- Instruções para explorar filmes e séries

### Catálogos (Filmes e Séries)
- Lista scrollável de itens
- Display com pôster, nome, gênero
- Toque para ver detalhes completos

### Detalhes
- Imagem em alta resolução
- Título completo
- Descrição/Sinopse
- Gênero do conteúdo

### Sobre
- Informações sobre o projeto
- Versão do aplicativo

### Contato
- Email para sugestões e dúvidas
- Links para GitHub do projeto
- Perfil LinkedIn do desenvolvedor

## 📊 Dados

Os dados são armazenados em arquivos JSON locais:

### Estrutura de um Filme/Série

```json
{
  "id": 1,
  "nome": "Título",
  "descricao": "Sinopse ou descrição breve",
  "imagem": "URL da imagem",
  "genero": "Gênero/Categoria"
}
```

## 🧪 Versão Atual

**v1.0.0** - Release inicial com funcionalidades básicas de catálogo

## 💻 Tecnologias Utilizadas

- **React**: ^19.1.0
- **React Native**: 0.81.5
- **Expo**: ~54.0.33
- **React Navigation**: 
  - @react-navigation/native: ^7.2.2
  - @react-navigation/bottom-tabs: ^7.15.9
  - @react-navigation/drawer: ^7.9.8
  - @react-navigation/native-stack: ^7.14.11
- **Expo Vector Icons**: Ionicons para ícones
- **Reanimated**: ~4.1.1 para animações
- **Safe Area Context**: ~5.6.0 para layout seguro

## 📝 Scripts Disponíveis

```bash
npm start        # Inicia o servidor de desenvolvimento
npm run android  # Executa no emulador/dispositivo Android
npm run ios      # Executa no simulador iOS
npm run web      # Executa na web
```

## 🔗 Links Úteis

- [Documentação React Native](https://reactnative.dev/)
- [Documentação Expo](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Ionicons](https://ionic.io/ionicons)

## 👤 Autor

**Arthur Morais**

- Email: arthur.m.santos20@aluno.senai.br
- GitHub: [@arthurmorais0227](https://github.com/arthurmorais0227)
- LinkedIn: [arthur-morais-0227](https://www.linkedin.com/in/arthurmorais0227/)

## 📜 Licença

Este projeto foi desenvolvido para fins educacionais.

## 🤝 Contribuições

Sugestões e melhorias são bem-vindas! Sinta-se livre para abrir issues ou pull requests.

---

**Desenvolvido com ❤️ em React Native**