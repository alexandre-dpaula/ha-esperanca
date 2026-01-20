# 🖼️ Guia de Imagens

## Imagem do Banner Hero

Você forneceu a imagem: **hf_20260119_223006_74dd9476-4de7-4ccf-8634-0ec62d5498f1**

### Como adicionar a imagem

#### Opção 1: Salvar localmente (Recomendado para performance)

1. **Salve a imagem na pasta `images/`**
   - Nome sugerido: `hero-banner.jpg`
   - Caminho final: `/images/hero-banner.jpg`

2. **Atualize o CSS** ([styles.css](styles.css:185))

```css
.hero__background {
    position: absolute;
    inset: 0;
    background: url('../images/hero-banner.jpg') center/cover no-repeat;
    background-attachment: fixed;
    z-index: 0;
}
```

#### Opção 2: Usar via CDN (mais fácil, mas depende de terceiros)

Se a imagem estiver hospedada em algum serviço (Imgur, Cloudinary, etc.):

```css
.hero__background {
    background: url('URL_DA_IMAGEM_AQUI') center/cover no-repeat;
}
```

---

## Otimização de Imagens

Para melhor performance, otimize as imagens antes de usar:

### Ferramentas Online (Grátis)
- [TinyPNG](https://tinypng.com/) - Compressão PNG/JPG
- [Squoosh](https://squoosh.app/) - Conversor Google (JPG, WebP, AVIF)
- [ImageOptim](https://imageoptim.com/) - Mac app

### Configurações Recomendadas

**Hero Banner:**
- Formato: JPG ou WebP
- Largura: 1920px
- Altura: 1080px (ou proporção 16:9)
- Qualidade: 80-85%
- Tamanho final: < 200KB

**Imagem Split Section:**
- Formato: JPG ou WebP
- Largura: 1200px
- Qualidade: 80%
- Tamanho final: < 150KB

---

## Estrutura de Pastas

```
há-esperança/
├── images/
│   ├── hero-banner.jpg          ← Imagem principal do hero
│   ├── plant-stones.jpg         ← Imagem da seção split
│   └── favicon/                 ← Ícones do site (opcional)
│       ├── favicon.ico
│       ├── icon-192.png
│       └── icon-512.png
```

---

## Usar WebP (Moderno e Leve)

WebP oferece 25-35% menos tamanho que JPG com mesma qualidade.

### HTML com fallback:

```html
<picture>
  <source srcset="images/hero-banner.webp" type="image/webp">
  <source srcset="images/hero-banner.jpg" type="image/jpeg">
  <img src="images/hero-banner.jpg" alt="Banner">
</picture>
```

### CSS com fallback:

```css
.hero__background {
    background: url('../images/hero-banner.jpg') center/cover no-repeat;
}

/* Modernizr ou @supports */
@supports (background-image: url('test.webp')) {
    .hero__background {
        background-image: url('../images/hero-banner.webp');
    }
}
```

---

## Lazy Loading (Performance)

Para imagens abaixo da dobra:

```html
<img src="images/plant.jpg" loading="lazy" alt="Planta nascendo entre pedras">
```

---

## Favicon (Ícone do Site)

### Criar Favicon

1. Use uma imagem 512x512px
2. Converta em [RealFaviconGenerator](https://realfavicongenerator.net/)
3. Baixe o pacote
4. Coloque na pasta `images/favicon/`

### Adicionar no HTML (antes do `</head>`):

```html
<link rel="icon" type="image/png" sizes="32x32" href="images/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="images/favicon/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="images/favicon/apple-touch-icon.png">
<link rel="manifest" href="images/favicon/site.webmanifest">
```

---

## Imagens de Placeholder (enquanto não tem imagens próprias)

### Unsplash (atual)

Estamos usando Unsplash atualmente:

**Hero:**
```
https://images.unsplash.com/photo-1464207687429-7505649dae38?q=80&w=2000
```

**Split Section:**
```
https://images.unsplash.com/photo-1416339442236-8ceb164046f8?q=80&w=1200
```

### Pexels (alternativa)

```
https://images.pexels.com/photos/ID/pexels-photo-ID.jpeg?auto=compress&cs=tinysrgb&w=1920
```

---

## Sugestões de Imagens

### Hero Banner
- Planta nascendo entre pedras
- Luz atravessando nuvens
- Caminho iluminado
- Mão segurando Bíblia
- Amanhecer/nascer do sol

### Split Section
- Close de planta verde
- Raízes rompendo solo
- Semente germinando
- Natureza resiliente

### Tom Visual
- **Cores**: Verde, dourado, tons terrosos
- **Mood**: Esperança, calma, renovação
- **Estilo**: Natural, autêntico, não genérico

---

## Sites de Imagens Grátis

1. **Unsplash** - unsplash.com (alta qualidade)
2. **Pexels** - pexels.com (grande variedade)
3. **Pixabay** - pixabay.com (grátis para uso comercial)
4. **Burst by Shopify** - burst.shopify.com
5. **Reshot** - reshot.com (ilustrações também)

---

## Checklist de Imagens

- [ ] Salvar imagem do hero na pasta `images/`
- [ ] Atualizar URL no CSS ([styles.css](styles.css:185))
- [ ] Otimizar imagem (< 200KB)
- [ ] Testar carregamento no navegador
- [ ] Adicionar imagem da seção split
- [ ] Criar favicon (opcional)
- [ ] Testar em mobile (tempo de carregamento)

---

## Passos Rápidos

1. **Salve sua imagem** como `images/hero-banner.jpg`

2. **Edite [styles.css](styles.css:185):**

```css
.hero__background {
    background: url('images/hero-banner.jpg') center/cover no-repeat;
```

3. **Salve e teste** abrindo `index.html` no navegador

4. **Se quiser otimizar**, use [Squoosh](https://squoosh.app/)

5. **Deploy!**

---

**Pronto! A imagem estará configurada e otimizada. 📸✨**
