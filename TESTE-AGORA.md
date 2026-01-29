# 🚀 Como Testar o Portfólio AGORA

## ✅ Status: PRONTO PARA TESTAR!

Todos os arquivos foram corrigidos com caminhos relativos. O CSS está aplicado e funcionando.

---

## 📋 Passo a Passo para Testar

### 1. Abrir o Site Localmente

**Opção A: VS Code Live Server (RECOMENDADO)**
1. Instale a extensão "Live Server" no VS Code
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"
4. O site abrirá automaticamente no navegador

**Opção B: Python**
```bash
python -m http.server 8000
```
Depois acesse: `http://localhost:8000`

**Opção C: Node.js**
```bash
npx http-server
```

**Opção D: Abrir Diretamente**
- Simplesmente clique duas vezes em `index.html`
- O CSS e JavaScript devem funcionar normalmente agora!

---

## 🎨 O Que Você Deve Ver

### Home (index.html)
- ✅ Header com navegação estilizada
- ✅ Hero section com título grande e serifado
- ✅ Seção "Como Trabalho" com 4 itens
- ✅ Projetos carregados dinamicamente (se o JSON funcionar)
- ✅ Footer com links

### Cores Aplicadas
- Fundo: Off-white (#F5F4F2)
- Texto: Quase preto (#1A1A1A)
- Acentos: Vinho (#7A2E2E)
- Tipografia: Libre Baskerville (títulos) + Inter (corpo)

### Funcionalidades JavaScript
- Ano de copyright atualizado automaticamente
- Smooth scroll nos links âncora
- Página atual destacada na navegação
- Projetos carregados do JSON

---

## ⚠️ Problemas Conhecidos

### Imagens Não Aparecem
**Normal!** As imagens ainda não foram adicionadas. Você verá:
- Espaços vazios onde deveriam estar as imagens
- Isso não afeta o resto do layout

**Solução:**
1. Adicione imagens reais em `assets/images/`
2. Ou use placeholders temporários de sites como:
   - https://placeholder.com/
   - https://unsplash.com/

### Projetos Não Carregam
Se os cards de projetos não aparecerem:
1. Abra o Console do navegador (F12)
2. Verifique se há erros de CORS
3. Use um servidor local (Live Server) ao invés de abrir o arquivo diretamente

---

## 🔍 Checklist de Teste

### Visual
- [ ] CSS está aplicado (cores, fontes, espaçamentos)
- [ ] Layout responsivo funciona (redimensione a janela)
- [ ] Navegação está estilizada
- [ ] Botões têm hover effects
- [ ] Tipografia está correta (serif nos títulos)

### Navegação
- [ ] Links do menu funcionam
- [ ] Navegação entre páginas funciona
- [ ] Links do footer funcionam
- [ ] Voltar para home funciona

### JavaScript
- [ ] Ano no footer está correto
- [ ] Projetos aparecem na home (se servidor local)
- [ ] Console sem erros (F12)

### Páginas
- [ ] index.html - Home
- [ ] about.html - Sobre
- [ ] projects.html - Projetos
- [ ] philosophy.html - Processo
- [ ] contact.html - Contato
- [ ] project-pages/ghost-of-tsushima.html
- [ ] project-pages/manual-dos-monstros.html

---

## 🐛 Se Algo Não Funcionar

### CSS Não Aparece
1. Verifique se os arquivos CSS existem em `assets/css/`
2. Abra o DevTools (F12) → Network → veja se os CSS foram carregados
3. Limpe o cache do navegador (Ctrl+Shift+R)

### Links Quebrados
1. Todos os links agora são relativos
2. Devem funcionar mesmo abrindo o arquivo diretamente
3. Se não funcionar, use Live Server

### JavaScript Não Funciona
1. Abra o Console (F12)
2. Veja se há erros
3. Verifique se os arquivos JS existem em `assets/js/`

---

## 📸 Próximos Passos Após Testar

1. **Adicionar Imagens Reais**
   - ghost-thumb.jpg (400x300px)
   - ghost-hero.jpg (1200x600px)
   - manual-thumb.jpg (400x300px)
   - manual-hero.jpg (1200x600px)

2. **Testar em Diferentes Navegadores**
   - Chrome
   - Firefox
   - Safari
   - Edge

3. **Testar Responsividade**
   - Mobile (320px, 375px, 414px)
   - Tablet (768px, 1024px)
   - Desktop (1280px, 1920px)

4. **Validar Código**
   - HTML: https://validator.w3.org/
   - CSS: https://jigsaw.w3.org/css-validator/

5. **Performance**
   - Lighthouse no DevTools
   - Alvo: 95+ em todas as métricas

---

## 🎉 Está Funcionando?

Se você vê:
- ✅ Cores aplicadas (fundo off-white, texto preto, acentos vinho)
- ✅ Tipografia serifada nos títulos
- ✅ Layout organizado e espaçado
- ✅ Navegação funcionando

**PARABÉNS! O portfólio está funcionando!** 🎊

Agora é só adicionar as imagens e fazer os ajustes finais que você quiser.

---

## 📞 Dúvidas?

Se algo não estiver funcionando como esperado, me avise e eu ajudo a resolver!
