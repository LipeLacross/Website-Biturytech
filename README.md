# Projeto BituryTech

Este projeto é um site para a BituryTech, uma startup de tecnologia que oferece soluções inovadoras e avançadas. Desenvolvido com Next.js e Tailwind CSS, o site proporciona uma experiência moderna e responsiva.

## 🔨 Funcionalidades do Projeto

- **Navegação**: Barra de navegação fixa com links para as principais seções do site.
- **Seção "Sobre"**: Apresenta o aplicativo ChronosGram com um vídeo demonstrativo e descrição das suas funcionalidades.
- **Seção Destaque**: Enfatiza a mensagem principal "Nunca mais reprove sem estudar!" com design atraente.
- **Seção "Home"**: Detalha a BituryTech, incluindo a missão da empresa e imagem do aplicativo.
- **Seção "Produtos"**: Oferece um formulário para captura de e-mails e links para redes sociais.
- **Rodapé**: Informações sobre o desenvolvedor do site.

### Exemplo Visual do Projeto


## ✔️ Técnicas e Tecnologias Utilizadas

- **Next.js**: Framework para renderização no lado do servidor e geração de sites estáticos.
- **Tailwind CSS**: Framework de CSS para estilização responsiva e moderna.
- **JavaScript**: Linguagem para lógica e interatividade.
- **HTML**: Linguagem de marcação para estruturação do conteúdo.

## 📁 Estrutura do Projeto

O projeto segue a seguinte estrutura:

### Diretórios e Arquivos

- **`/public`**: Contém arquivos estáticos acessíveis publicamente.
    - `BituryLogo.png`: Logotipo da BituryTech.
    - `Instagram.png`: Ícone do Instagram.
    - `Linkedin.png`: Ícone do LinkedIn.
    - `App.png`: Imagem do aplicativo.
    - `Vídeodemosntra.mp4`: Vídeo demonstrativo do ChronosGram.

- **`/src`**: Contém o código-fonte do projeto.
    - **`/pages`**: Diretório para arquivos de páginas do Next.js.
        - `index.js`: Arquivo principal para a página inicial do site.

- **`/styles`**: Contém arquivos de estilos.
    - `globals.css`: Estilos globais para o projeto.
    - `tailwind.config.js`: Configuração do Tailwind CSS.

- **`.gitignore`**: Arquivo que especifica quais arquivos e diretórios o Git deve ignorar.
- **`package.json`**: Gerencia as dependências do projeto e scripts de execução.
- **`README.md`**: Documentação do projeto.

## 🛠️ Abrir e Rodar o Projeto

Para executar o projeto localmente, siga estes passos:

1. **Clone o repositório**:
   ```bash
    git clone https://github.com/seuusuario/seurepositorio.git

2. **Instale as dependências**:

    ```bash
    cd seurepositorio
    npm install
3. **Inicie o servidor de desenvolvimento**:

    ```bash
    npm run dev
   
4. **Abra seu navegador e vá para http://localhost:3000 para ver o site.**

🌐 Deploy

Para implantar o projeto, siga estas etapas:

1. Construa o projeto para produção:

```bash
    npm run build
```
2. Publique o projeto em um serviço de hospedagem como Vercel, Netlify, ou outro de sua preferência.


3. Configure o domínio e outras opções conforme necessário.