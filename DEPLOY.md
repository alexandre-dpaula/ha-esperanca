# 🚀 Guia Rápido de Deploy

## Opção 1: Deploy via Vercel CLI (Recomendado)

### Passo 1: Instalar Vercel CLI

```bash
npm install -g vercel
```

### Passo 2: Fazer Login

```bash
vercel login
```

### Passo 3: Deploy

```bash
# Na pasta do projeto
cd "Há esperança"

# Primeiro deploy (desenvolvimento)
vercel

# Deploy de produção
vercel --prod
```

### Comandos Úteis

```bash
# Ver status dos deploys
vercel ls

# Ver logs
vercel logs

# Remover projeto
vercel remove ainda-ha-esperanca
```

---

## Opção 2: Deploy via GitHub + Vercel (Automático)

### Passo 1: Criar repositório no GitHub

```bash
# Inicializar git (se ainda não fez)
git init

# Adicionar arquivos
git add .

# Primeiro commit
git commit -m "Initial commit: Landing Page Ainda Há Esperança"

# Criar repositório no GitHub e conectar
git remote add origin https://github.com/SEU_USUARIO/ainda-ha-esperanca.git

# Push
git push -u origin main
```

### Passo 2: Conectar com Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Importe seu repositório GitHub
4. Configure:
   - **Framework Preset**: Other
   - **Build Command**: (deixe vazio)
   - **Output Directory**: (deixe vazio)
5. Clique em "Deploy"

### Resultado

Cada push no GitHub gerará um deploy automático!

---

## Opção 3: Arrastar e Soltar (Mais Fácil)

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Add New..." → "Project"
3. Arraste a pasta do projeto para a área de upload
4. Configure o nome do projeto
5. Deploy!

---

## 📝 Pós-Deploy

### Configurar Domínio Personalizado

No painel da Vercel:
1. Vá em "Settings" → "Domains"
2. Adicione seu domínio (ex: `aindahaesperanca.com`)
3. Configure o DNS conforme instruções

### Variables de Ambiente (se necessário)

```bash
# Via CLI
vercel env add NOME_DA_VARIAVEL

# Via Dashboard
Settings → Environment Variables
```

### Atualizar Projeto

```bash
# Fazer alterações nos arquivos
# Commit
git add .
git commit -m "Atualização XYZ"

# Deploy automático ao fazer push
git push

# OU via Vercel CLI
vercel --prod
```

---

## 🔍 Verificar Deploy

Após o deploy, acesse:

```
https://SEU-PROJETO.vercel.app
```

Teste:
- ✅ Todas as seções carregam
- ✅ Animações funcionam
- ✅ Modais abrem/fecham
- ✅ Ícones Lucide aparecem
- ✅ Responsividade mobile
- ✅ Performance (Google PageSpeed)

---

## 🐛 Troubleshooting

### Ícones não aparecem

Verifique se o CDN do Lucide está carregando:
```html
<script src="https://unpkg.com/lucide@latest"></script>
```

### Imagens não carregam

URLs do Unsplash podem ter mudado. Substitua no CSS:
- `.hero__background` em [styles.css](styles.css:206)
- `.split__image-wrapper` em [styles.css](styles.css:406)

### Erros de CORS

Adicione headers no `vercel.json` (já configurado).

### Build falha

Este é um projeto estático puro, não precisa de build. Verifique se não há erros de sintaxe nos arquivos.

---

## 📊 Monitoramento

Após deploy, monitore:

1. **Analytics da Vercel**: Dashboard → Analytics
2. **Google Analytics**: Adicione o código no HTML
3. **Uptime**: Use [UptimeRobot](https://uptimerobot.com) (grátis)

---

## 🎯 Próximos Passos

Depois do deploy inicial:

1. **Teste em dispositivos reais**
   - iOS Safari
   - Android Chrome
   - Desktop (Chrome, Firefox, Safari)

2. **Configure monitoramento**
   - Google Analytics
   - Hotjar (opcional - heatmaps)

3. **Crie QR Code**
   - Use [QR Code Generator](https://www.qr-code-generator.com/)
   - Aponte para `https://SEU-PROJETO.vercel.app`
   - Teste o QR Code antes de imprimir

4. **Backup**
   - Mantenha o código no GitHub
   - Faça backup das imagens

---

## 💡 Dicas Finais

- **URL amigável**: Configure domínio personalizado
- **SSL**: Vercel fornece HTTPS automático
- **Performance**: Otimize imagens (WebP, compressão)
- **SEO**: Adicione meta tags Open Graph
- **Analytics**: Monitore conversões (cliques nos CTAs)

---

**Pronto para impactar vidas! 🌱✨**
