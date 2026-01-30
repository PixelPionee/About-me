# Instruções para Adicionar as Imagens dos Projetos

## ⚠️ IMPORTANTE
Você precisa adicionar manualmente as 6 imagens dos projetos nesta pasta.

## 📸 Imagens Necessárias

### 1. Manual dos Monstros
**Arquivo:** `manual-thumb.jpg` (400x300px)
**Arquivo:** `manual-hero.jpg` (1200x600px)
**Screenshot de:** https://manual-dos-monstros-h10wnsxpu-caios-projects-a104c3b2.vercel.app/

### 2. Ghost of Tsushima  
**Arquivo:** `ghost-thumb.jpg` (400x300px)
**Arquivo:** `ghost-hero.jpg` (1200x600px)
**Screenshot de:** https://pixelpionee.github.io/Ghost-of-Tsushima/

### 3. Battlefield Archive
**Arquivo:** `battlefield-thumb.jpg` (400x300px)
**Arquivo:** `battlefield-hero.jpg` (1200x600px)
**Screenshot de:** https://battlefiled.vercel.app/

## 🎯 Como Fazer

### Opção 1: Screenshots Manuais
1. Abra cada projeto no navegador
2. Tire um screenshot da tela inicial
3. Redimensione para as dimensões corretas:
   - **Thumbnails:** 400x300px (proporção 4:3)
   - **Hero Images:** 1200x600px (proporção 2:1)
4. Otimize as imagens com TinyPNG ou Squoosh
5. Salve nesta pasta com os nomes corretos

### Opção 2: Usar Ferramentas Online
- **Screenshot API:** https://www.screenshotapi.net/
- **URL to Image:** https://urltoimage.com/
- **Screely:** https://www.screely.com/

## 📐 Especificações Técnicas

- **Formato:** JPG
- **Qualidade:** 80-85%
- **Otimização:** Obrigatória (use TinyPNG ou Squoosh)
- **Aspect Ratio:** Manter consistente

## ✅ Checklist

- [ ] manual-thumb.jpg (400x300px)
- [ ] manual-hero.jpg (1200x600px)
- [ ] ghost-thumb.jpg (400x300px)
- [ ] ghost-hero.jpg (1200x600px)
- [ ] battlefield-thumb.jpg (400x300px)
- [ ] battlefield-hero.jpg (1200x600px)

## 🔧 Após Adicionar as Imagens

Execute:
```bash
git add assets/images/*.jpg
git commit -m "Add: Imagens dos projetos (thumbnails e hero images)"
git push
```

## 💡 Dica
Se quiser usar placeholders temporários enquanto não tem as imagens reais, você pode usar:
- https://placehold.co/400x300/7A2E2E/F5F4F2?text=Projeto
- https://placehold.co/1200x600/7A2E2E/F5F4F2?text=Projeto+Hero
