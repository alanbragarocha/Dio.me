# InstaDio - Clone da Interface do Instagram

Um projeto que reproduz a interface de login do Instagram, adaptado com a marca e identidade visual da Digital Innovation One (DIO).

## 📋 Sobre o Projeto

Este projeto é uma recriação da página de login do Instagram, desenvolvido com HTML e CSS puros. O objetivo é praticar conceitos de desenvolvimento front-end, incluindo layout responsivo, flexbox e design de interface.

### Características principais

- Design responsivo que se adapta a diferentes tamanhos de tela
- Interface clean e moderna inspirada no Instagram
- Integração com a identidade visual da DIO
- Links funcionais para os perfis e aplicativos da DIO

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estruturação do conteúdo
- **CSS3**: Estilização e layout responsivo
- **Flexbox**: Organização e alinhamento dos elementos

## 📁 Estrutura do Projeto

```text
instagram-dio-master/
├── index.html          # Página principal
├── style.css           # Estilos CSS
├── README.md           # Documentação do projeto
└── img/                # Pasta de imagens
    ├── Alan.jpg        # Foto de perfil do usuário
    ├── apple-button.png        # Botão de download para iOS
    ├── cellphone.png           # Imagem do smartphone
    ├── googleplay-button.png   # Botão de download para Android
    └── logo-dio.png            # Logotipo da DIO
```

## 🎨 Layout e Design

### Desktop

- Layout em duas colunas:
  - **Coluna esquerda**: Imagem do smartphone
  - **Coluna direita**: Formulário de login e informações

### Mobile (< 650px)

- Layout de coluna única
- Imagem do smartphone ocultada
- Formulário centralizado ocupando toda a largura

### Tablet (< 1024px)

- Ajuste da largura do container principal
- Mantém o layout de duas colunas

## 🔧 Funcionalidades

### Elementos Interativos

1. **Botão "Continue como Alan Braga"**: Redireciona para o perfil da DIO
2. **Link "Remover conta"**: Redireciona para o site da DIO
3. **Link "Inscreva-se"**: Redireciona para o site da DIO
4. **Botões de Download**: Links para os apps da DIO na App Store e Google Play

### Seções da Interface

- **Header**: Logo da DIO
- **Perfil**: Foto e botão de login
- **Alternativas**: Opções para trocar conta ou se inscrever
- **Download**: Botões para baixar o aplicativo

## 📱 Responsividade

O projeto conta com três breakpoints principais:

```css
/* Desktop padrão */
@media (max-width: 1024px) {
  /* Ajustes para tablet */
}

@media (max-width: 650px) {
  /* Ajustes para mobile */
}
```

### Principais ajustes responsivos

- **Mobile**: Oculta a imagem do smartphone e remove bordas
- **Tablet**: Ajusta a largura do container
- **Desktop**: Layout padrão em duas colunas

## 🎯 Como Executar

1. Clone ou baixe o repositório
2. Abra o arquivo `index.html` em qualquer navegador web
3. Ou utilize um servidor local para melhor experiência:

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com PHP
php -S localhost:8000
```

## 🎨 Paleta de Cores

| Cor            | Código    | Uso                   |
| -------------- | --------- | --------------------- |
| Azul Principal | `#0095F6` | Botões e links        |
| Cinza Claro    | `#F3F3F3` | Background            |
| Cinza Médio    | `#A0A0A0` | Texto secundário      |
| Cinza Borda    | `#D3D3D3` | Bordas dos containers |
| Branco         | `#FFF`    | Background dos cards  |
| Laranja DIO    | `#ffc107` | Logo background       |

## 📚 Conceitos Aplicados

### CSS

- **Flexbox**: Para alinhamento e distribuição dos elementos
- **Media Queries**: Para responsividade
- **Box Model**: Controle de padding, margin e border
- **Background Images**: Para os botões de download
- **Border Radius**: Para elementos arredondados

### HTML

- **Estrutura Semântica**: Uso adequado de tags HTML5
- **Acessibilidade**: Textos alternativos em imagens
- **Links Externos**: Configuração correta de `target="_blank"`

## 🔗 Links Utilizados

- **Perfil DIO**: <https://www.dio.me/users/alanbragarocha>
- **Site Principal**: <https://digitalinnovation.one/>
- **App Store**: iTunes link para o app da DIO
- **Google Play**: Play Store link para o app da DIO

## 👨‍💻 Autor

Projeto desenvolvido como exercício prático de front-end, inspirado na interface do Instagram e adaptado para a Digital Innovation One.

## 📄 Licença

Este projeto é apenas para fins educacionais e de prática. Não possui licença comercial.

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
