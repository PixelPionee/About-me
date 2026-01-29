# TODO - Portfólio Caio Finisguerra

## ✅ Fase 1: Estrutura HTML & JavaScript (COMPLETO)

### Arquivos Criados
- [x] `index.html` - Home sem comentários
- [x] `about.html` - Sobre sem comentários
- [x] `projects.html` - Lista de projetos sem comentários
- [x] `philosophy.html` - Processo sem comentários
- [x] `contact.html` - Contato sem comentários
- [x] `project-pages/ghost-of-tsushima.html` - Case study sem comentários
- [x] `project-pages/manual-dos-monstros.html` - Case study sem comentários
- [x] `assets/data/projects.json` - Dados estruturados
- [x] `assets/js/main.js` - Utilitários globais (sem comentários)
- [x] `assets/js/loader.js` - Carregamento de projetos (sem comentários)
- [x] `README.md` - Documentação do projeto
- [x] `TODO.md` - Este arquivo

---

## ✅ Fase 2: CSS (COMPLETO)

### Arquivos CSS Criados (SEM COMENTÁRIOS)
- [x] `assets/css/global.css` - Reset, variáveis, estilos base
- [x] `assets/css/typography.css` - Tipografia completa
- [x] `assets/css/layout.css` - Grid, componentes, páginas, responsividade

### Características Implementadas
- [x] Variáveis CSS (cores, espaçamentos, fontes)
- [x] Reset CSS customizado
- [x] Tipografia responsiva com clamp()
- [x] Layout responsivo (mobile-first)
- [x] Componentes estilizados (cards, botões, navegação)
- [x] Estados de hover e foco
- [x] Acessibilidade (sr-only, skip-link)
- [x] Animações sutis e funcionais
- [x] Media queries para mobile/tablet

---

## 🎯 Fase 3: Refinamento (PRÓXIMO)

### 3.1 Imagens
- [ ] Adicionar imagens dos projetos
  - [ ] ghost-thumb.jpg (400x300px)
  - [ ] ghost-hero.jpg (1200x600px)
  - [ ] manual-thumb.jpg (400x300px)
  - [ ] manual-hero.jpg (1200x600px)
- [ ] Otimizar todas as imagens
- [ ] Considerar WebP com fallback

### 3.2 Testes Locais
- [ ] Testar em servidor local
- [ ] Verificar carregamento do JSON
- [ ] Testar navegação entre páginas
- [ ] Verificar responsividade em diferentes tamanhos
- [ ] Testar JavaScript (smooth scroll, copyright, etc)

### 3.3 Performance
- [ ] Lighthouse audit (alvo: 95+)
- [ ] Verificar Core Web Vitals
- [ ] Otimizar carregamento de fontes
- [ ] Minificar CSS para produção
- [ ] Minificar JS para produção

### 3.4 Acessibilidade
- [ ] Validar HTML (W3C Validator)
- [ ] Testar navegação por teclado
- [ ] Verificar contraste de cores (WCAG AA)
- [ ] Testar com screen reader
- [ ] Verificar ARIA labels

### 3.5 Cross-browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🚀 Fase 4: Deploy

### 4.1 Preparação
- [ ] Criar build script (minificação)
- [ ] Gerar sitemap.xml
- [ ] Criar robots.txt
- [ ] Adicionar favicon
- [ ] Verificar meta tags Open Graph

### 4.2 Hospedagem
- [ ] Escolher plataforma (GitHub Pages, Vercel, Netlify)
- [ ] Configurar deploy automático
- [ ] Testar em produção
- [ ] Configurar domínio customizado (opcional)
- [ ] Configurar HTTPS

### 4.3 SEO
- [ ] Verificar meta descriptions
- [ ] Verificar títulos otimizados
- [ ] Verificar alt text em imagens
- [ ] Considerar structured data (JSON-LD)
- [ ] Google Search Console
- [ ] Analytics (opcional)

---

## 📋 Checklist de Qualidade Final

### Antes de Considerar "Pronto"
- [ ] Lighthouse Score 95+ (Performance, Accessibility, Best Practices, SEO)
- [ ] HTML válido (W3C)
- [ ] CSS válido (W3C)
- [ ] Sem erros no console
- [ ] Funciona sem JavaScript (progressive enhancement)
- [ ] Navegação por teclado 100% funcional
- [ ] Contraste de cores WCAG AA
- [ ] Imagens otimizadas (<100KB cada)
- [ ] Tempo de carregamento <2s (3G)
- [ ] Responsivo em todos os breakpoints

---

## 🎨 Design Tokens (Referência Rápida)

### Cores
- Background: `#F5F4F2`
- Text: `#1A1A1A`
- Accent: `#7A2E2E`
- Accent Alt: `#8C3A2B`
- Border: `#E0DED9`
- Hover: `#5A1E1E`

### Tipografia
- Serif: Libre Baskerville
- Sans: Inter

### Espaçamento
- XS: 0.5rem
- SM: 1rem
- MD: 2rem
- LG: 4rem
- XL: 6rem

### Breakpoints
- Mobile: 480px
- Tablet: 768px
- Desktop: 1024px
- Wide: 1440px

---

## 📝 Notas Importantes

### Decisões de Código
1. **Sem Comentários:** HTML, CSS e JS estão sem comentários conforme solicitado
2. **Vanilla CSS:** Sem frameworks, controle total
3. **Mobile-first:** Design responsivo começando pelo mobile
4. **Progressive Enhancement:** Funciona sem JS
5. **Acessibilidade:** WCAG AA mínimo

### Próximo Passo Imediato
**Adicionar imagens dos projetos** e testar o site localmente com um servidor.

### Como Testar Localmente
```bash
# Opção 1: Python
python -m http.server 8000

# Opção 2: Node.js
npx http-server

# Opção 3: PHP
php -S localhost:8000

# Opção 4: VS Code Live Server
# Instalar extensão Live Server e clicar com botão direito em index.html
```

---

Última atualização: 2024
Status: Fase 2 Completa - CSS Implementado
