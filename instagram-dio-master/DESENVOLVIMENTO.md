# Guia de Desenvolvimento - InstaDio

## 🛠️ Configuração do Ambiente de Desenvolvimento

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code recomendado)
- Servidor local opcional para desenvolvimento

### Extensões Recomendadas para VS Code

- Live Server - Para servidor de desenvolvimento local
- Prettier - Formatação de código
- Auto Rename Tag - Renomear tags HTML automaticamente
- CSS Peek - Navegação entre HTML e CSS

## 🎯 Estrutura de Desenvolvimento

### Organização dos Arquivos

```
├── index.html      # Estrutura HTML principal
├── style.css       # Todos os estilos CSS
└── img/           # Assets de imagem
```

### Convenções de Código

#### HTML

- Use indentação de 2 espaços
- Sempre inclua textos alternativos em imagens
- Use classes semânticas e descritivas
- Mantenha a estrutura hierárquica clara

#### CSS

- Use metodologia BEM para nomenclatura de classes
- Organize propriedades em ordem alfabética
- Use variáveis CSS para cores e tamanhos reutilizáveis
- Comente seções importantes

## 📱 Testes de Responsividade

### Breakpoints de Teste

1. **Mobile**: 320px - 649px
2. **Tablet**: 650px - 1023px
3. **Desktop**: 1024px+

### Dispositivos para Teste

- iPhone SE (375px)
- iPhone 12 Pro (390px)
- iPad (768px)
- iPad Pro (1024px)
- Desktop 1920px

### Ferramentas de Teste

- Chrome DevTools (F12)
- Firefox Responsive Design Mode
- Safari Web Inspector
- Teste em dispositivos reais quando possível

## 🔍 Checklist de Qualidade

### Acessibilidade

- [ ] Todas as imagens têm alt text
- [ ] Contraste adequado entre texto e fundo
- [ ] Links são descritivos
- [ ] Navegação por teclado funcional

### Performance

- [ ] Imagens otimizadas (WebP quando possível)
- [ ] CSS minificado para produção
- [ ] Sem recursos desnecessários carregados

### SEO

- [ ] Title tag descritivo
- [ ] Meta description presente
- [ ] Estrutura de headings correta
- [ ] URLs amigáveis

### Cross-browser

- [ ] Testado no Chrome
- [ ] Testado no Firefox
- [ ] Testado no Safari
- [ ] Testado no Edge

## 🚀 Deploy e Publicação

### Opções de Hospedagem Gratuita

1. **GitHub Pages**
   - Perfeito para projetos estáticos
   - Deploy automático via Git
2. **Netlify**
   - Deploy por drag & drop
   - HTTPS automático
3. **Vercel**
   - Integração com Git
   - Preview deployments

### Processo de Deploy

1. Validar código HTML e CSS
2. Otimizar imagens
3. Testar em diferentes navegadores
4. Fazer upload dos arquivos
5. Configurar domínio (se necessário)

## 🔧 Melhorias Futuras

### Funcionalidades Sugeridas

- [ ] Animações CSS suaves
- [ ] Modo escuro/claro
- [ ] Validação de formulário
- [ ] Loading states
- [ ] Micro-interações

### Otimizações Técnicas

- [ ] Implementar CSS Grid para layouts complexos
- [ ] Adicionar Service Worker para cache
- [ ] Lazy loading para imagens
- [ ] Implementar CSS custom properties

## 📖 Recursos de Aprendizado

### Documentação Oficial

- [MDN Web Docs](https://developer.mozilla.org/)
- [W3C Validator](https://validator.w3.org/)
- [Can I Use](https://caniuse.com/)

### Tutoriais Recomendados

- Flexbox Froggy (flexboxfroggy.com)
- CSS Grid Garden (cssgridgarden.com)
- Responsive Web Design Fundamentals

## 🐛 Solução de Problemas Comuns

### Problemas de Layout

- **Flexbox não alinha**: Verificar `align-items` e `justify-content`
- **Overflow horizontal**: Verificar larguras e margens
- **Elementos não responsivos**: Verificar media queries

### Problemas de CSS

- **Estilos não aplicados**: Verificar especificidade CSS
- **Imagens quebradas**: Verificar caminhos relativos
- **Fontes não carregam**: Verificar fallbacks

### Debugging

- Use Console do navegador (F12)
- Inspecione elementos para debug de CSS
- Teste isoladamente cada componente
- Use `console.log()` para debug JavaScript (quando aplicável)
