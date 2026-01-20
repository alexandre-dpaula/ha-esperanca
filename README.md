# 🌱 Ainda Há Esperança

> Landing Page emocional e minimalista para projeto evangelístico

## 📖 Sobre o Projeto

Uma experiência digital que transmite **presença, acolhimento e esperança** para pessoas que receberam uma Bíblia física como presente. Acessada via QR Code, a página cria uma conexão emocional profunda e oferece apoio espiritual de forma respeitosa e não invasiva.

## ✨ Características

### UX/UI
- **Design Minimalista**: Foco na mensagem, sem distrações
- **Mobile-First**: Otimizado para smartphones (90% dos acessos)
- **Acessível**: Bom contraste, fontes legíveis, suporte a leitores de tela
- **Performático**: Carregamento rápido, animações suaves

### Tecnologias
- **HTML5 Semântico**
- **CSS3 Moderno** (Grid, Flexbox, Custom Properties)
- **JavaScript Vanilla** (sem dependências pesadas)
- **Lucide Icons** (biblioteca de ícones leve)
- **Vercel** (hospedagem e deploy)

## 🎨 Paleta de Cores

```css
--color-primary: #1F3D2B        /* Verde escuro (confiança) */
--color-secondary: #D4AF37      /* Dourado (esperança) */
--color-stone: #E5E0D8          /* Pedra clara (calma) */
--color-white: #FAFAF8          /* Branco suave */
```

## 🏗️ Estrutura do Projeto

```
há-esperança/
├── index.html          # Estrutura HTML semântica
├── styles.css          # Design system completo
├── script.js           # Interações e animações
├── vercel.json         # Configuração Vercel
└── README.md           # Este arquivo
```

## 🚀 Como Executar Localmente

### Opção 1: Abrir diretamente
Basta abrir o arquivo `index.html` em um navegador moderno.

### Opção 2: Servidor local (recomendado)

```bash
# Usando Python 3
python3 -m http.server 8000

# Usando Node.js (npx)
npx serve

# Usando PHP
php -S localhost:8000
```

Acesse: `http://localhost:8000`

## 📦 Deploy no Vercel

### Primeiro deploy

```bash
# Instalar Vercel CLI (se ainda não tiver)
npm install -g vercel

# Na pasta do projeto, executar:
vercel

# Seguir as instruções:
# - Set up and deploy? Yes
# - Which scope? (sua conta)
# - Link to existing project? No
# - Project name: ainda-ha-esperanca
# - In which directory is your code located? ./
```

### Deploys futuros

```bash
# Deploy de produção
vercel --prod
```

### Via GitHub

1. Faça push do código para um repositório GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Importe o repositório
4. Deploy automático!

## 🔧 Personalização

### Trocar Imagens

Edite as URLs no CSS ([styles.css](styles.css)):

```css
/* Hero background */
.hero__background {
    background: url('SUA_IMAGEM_AQUI') center/cover no-repeat;
}

/* Split section */
.split__image-wrapper {
    background: url('SUA_IMAGEM_AQUI') center/cover no-repeat;
}
```

### Adicionar WhatsApp/E-mail

Edite o modal de contato no HTML ([index.html](index.html)):

```html
<!-- Substituir pelo número real -->
<a href="https://wa.me/5511999999999?text=Olá,%20encontrei%20a%20Bíblia">

<!-- Substituir pelo e-mail real -->
<a href="mailto:seuemail@dominio.com">
```

### Integrar Formulário de Oração

No arquivo [script.js](script.js), na função `initPrayerForm()`, você pode:

1. **Enviar para Google Forms**
2. **Webhook (Zapier, Make.com)**
3. **API própria**
4. **Serviço de e-mail (EmailJS, Formspree)**

Exemplo com Formspree:

```javascript
// Dentro de initPrayerForm()
const response = await fetch('https://formspree.io/f/SEU_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: prayerText })
});
```

## 📊 Analytics (Opcional)

Para adicionar Google Analytics, insira antes do `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🎯 Seções da Landing Page

1. **Hero** - Impacto emocional imediato
2. **Não Foi Por Acaso** - Criação de conexão
3. **Um Presente** - Valor da Bíblia recebida
4. **Metáfora Visual** - Esperança nascendo
5. **Convite Suave** - CTAs não invasivos
6. **Paz e Silêncio** - Encerramento contemplativo

## 🌐 Acessibilidade

- ✅ Contraste WCAG AA
- ✅ Navegação por teclado
- ✅ ARIA labels
- ✅ Prefers-reduced-motion
- ✅ Fontes legíveis (min 16px)

## 📱 Suporte de Navegadores

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile: iOS 14+, Android 9+

## 🔐 Segurança

Headers de segurança configurados via `vercel.json`:
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy

## 📝 Licença

Este projeto é de uso livre para fins evangelísticos e não-comerciais.

## 💡 Sugestões de Melhorias Futuras

- [ ] PWA (Progressive Web App)
- [ ] QR Code dinâmico com tracking
- [ ] Multi-idioma
- [ ] Modo escuro
- [ ] Integração com CRM
- [ ] Dashboard de métricas

## 🙏 Propósito

Criado com o propósito de alcançar vidas e transmitir esperança através da tecnologia.

---

**Ainda há esperança. ✨**
