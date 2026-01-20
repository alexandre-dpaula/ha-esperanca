# 🔌 Guia de Integrações

Este documento contém exemplos práticos de como integrar o formulário de oração e contatos com diferentes serviços.

---

## 📧 1. Formspree (Mais Fácil - Grátis)

### Setup

1. Acesse [formspree.io](https://formspree.io)
2. Crie uma conta
3. Crie um novo form
4. Copie o endpoint

### Código ([script.js](script.js))

```javascript
async function initPrayerForm() {
    const form = document.getElementById('prayer-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const textarea = form.querySelector('textarea');
        const prayerText = textarea.value.trim();

        try {
            const response = await fetch('https://formspree.io/f/SEU_ID_AQUI', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: prayerText,
                    timestamp: new Date().toISOString(),
                    source: 'Landing Page - Ainda Há Esperança'
                })
            });

            if (response.ok) {
                showSuccessMessage(form);
                textarea.value = '';
            } else {
                throw new Error('Erro no envio');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Desculpe, ocorreu um erro. Tente novamente.');
        }
    });
}
```

---

## 📮 2. EmailJS (Envio direto por e-mail)

### Setup

1. Acesse [emailjs.com](https://www.emailjs.com)
2. Crie uma conta
3. Configure um serviço de e-mail (Gmail, Outlook, etc.)
4. Crie um template
5. Copie suas credenciais

### HTML (adicione antes do `</body>`)

```html
<script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
</script>
<script type="text/javascript">
   (function(){
      emailjs.init("SEU_PUBLIC_KEY");
   })();
</script>
```

### JavaScript

```javascript
async function initPrayerForm() {
    const form = document.getElementById('prayer-form');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const prayerText = form.querySelector('textarea').value;

        try {
            await emailjs.send(
                'SEU_SERVICE_ID',
                'SEU_TEMPLATE_ID',
                {
                    message: prayerText,
                    to_email: 'seu@email.com',
                    from_name: 'Landing Page'
                }
            );

            showSuccessMessage(form);
            form.reset();
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao enviar. Tente novamente.');
        }
    });
}
```

---

## 🔗 3. Webhook (Zapier / Make.com)

### Setup Zapier

1. Crie um Zap
2. Trigger: "Webhooks by Zapier" → "Catch Hook"
3. Copie a URL do webhook
4. Action: escolha destino (Google Sheets, E-mail, Notion, etc.)

### Código

```javascript
async function initPrayerForm() {
    const WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/XXXXX/YYYYY/';

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const prayerText = form.querySelector('textarea').value;

        try {
            await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prayer: prayerText,
                    timestamp: new Date().toISOString(),
                    userAgent: navigator.userAgent
                })
            });

            showSuccessMessage(form);
            form.reset();
        } catch (error) {
            console.error('Erro:', error);
        }
    });
}
```

---

## 📊 4. Google Sheets (via Apps Script)

### Setup

1. Crie uma Google Sheets
2. Extensions → Apps Script
3. Cole o código abaixo:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.prayer,
    data.source || 'Landing Page'
  ]);

  return ContentService.createTextOutput(
    JSON.stringify({ success: true })
  ).setMimeType(ContentService.MimeType.JSON);
}
```

4. Deploy → New deployment → Web app
5. Execute as: "Me"
6. Who has access: "Anyone"
7. Copie a URL

### Código

```javascript
async function initPrayerForm() {
    const SCRIPT_URL = 'https://script.google.com/macros/s/SEU_ID/exec';

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const prayerText = form.querySelector('textarea').value;

        try {
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prayer: prayerText,
                    source: 'Landing Page'
                })
            });

            showSuccessMessage(form);
            form.reset();
        } catch (error) {
            console.error('Erro:', error);
        }
    });
}
```

---

## 💬 5. WhatsApp Business API

### Setup (usando WATI ou similar)

```javascript
function openWhatsAppModal() {
    const phone = '5511999999999'; // Seu número
    const message = encodeURIComponent(
        'Olá! Encontrei a Bíblia e gostaria de conversar.'
    );

    const whatsappURL = `https://wa.me/${phone}?text=${message}`;
    window.open(whatsappURL, '_blank');
}
```

### HTML (botão CTA)

```html
<button onclick="openWhatsAppModal()" class="btn btn--primary">
    <i data-lucide="message-circle"></i>
    <span>Conversar no WhatsApp</span>
</button>
```

---

## 📱 6. Telegram

```javascript
function sendToTelegram(message) {
    const BOT_TOKEN = 'SEU_BOT_TOKEN';
    const CHAT_ID = 'SEU_CHAT_ID';

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: `📿 Novo pedido de oração:\n\n${message}`,
            parse_mode: 'HTML'
        })
    });
}
```

---

## 🗄️ 7. Notion Database

### Setup

1. Crie uma database no Notion
2. Crie uma integração: [notion.so/my-integrations](https://www.notion.so/my-integrations)
3. Conecte a integração à database
4. Copie o Integration Token e Database ID

### Código (Backend necessário - Vercel Functions)

Crie `api/prayer.js`:

```javascript
const { Client } = require('@notionhq/client');

const notion = new Client({
    auth: process.env.NOTION_TOKEN
});

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { prayer } = req.body;

        await notion.pages.create({
            parent: { database_id: process.env.NOTION_DATABASE_ID },
            properties: {
                'Pedido': {
                    title: [{ text: { content: prayer } }]
                },
                'Data': {
                    date: { start: new Date().toISOString() }
                },
                'Status': {
                    select: { name: 'Novo' }
                }
            }
        });

        res.status(200).json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao salvar' });
    }
}
```

---

## 🎯 Recomendações

### Para começar (mais fácil):
1. **Formspree** - Setup em 2 minutos
2. **Google Sheets** - Grátis e familiar
3. **WhatsApp direto** - Link simples

### Para escalar:
1. **EmailJS** - Automação de e-mails
2. **Zapier** - Integração com múltiplas ferramentas
3. **Notion** - CRM completo

### Para avançados:
1. **Vercel Functions** + Banco de dados
2. **Firebase** - Real-time
3. **Supabase** - Backend completo

---

## 🔒 Segurança

**IMPORTANTE**: Nunca exponha tokens/keys no frontend!

Use variáveis de ambiente:

```javascript
// ❌ ERRADO
const API_KEY = 'sk-123456789';

// ✅ CORRETO (Vercel)
const API_KEY = process.env.API_KEY;
```

Configure no Vercel:
```bash
vercel env add API_KEY
```

---

## 📊 Analytics de Conversão

Rastreie quando usuários clicam nos CTAs:

```javascript
// Google Analytics
function trackPrayerRequest() {
    gtag('event', 'prayer_request', {
        'event_category': 'engagement',
        'event_label': 'Prayer Form Submit'
    });
}

// Facebook Pixel
function trackPrayerRequest() {
    fbq('track', 'Lead', {
        content_name: 'Prayer Request'
    });
}
```

---

## 💡 Dica Final

Comece simples e evolua:

1. **Semana 1**: WhatsApp direto
2. **Semana 2**: Adicione Formspree
3. **Semana 3**: Configure Google Sheets
4. **Mês 2**: Implemente CRM (Notion/Airtable)

**O importante é lançar e começar a impactar vidas! 🌱**
