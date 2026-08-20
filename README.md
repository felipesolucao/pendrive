# Pen Drive Atualizado 2026 — Landing Page

Landing page em Next.js 14 (App Router) para venda de pacotes de música
atualizada (pendrive / download digital), com design próprio: paleta
azul elétrico sobre preto-azulado, tipografia Space Grotesk + Inter +
JetBrains Mono, e um elemento visual assinatura (pendrive com equalizador
animado).

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Como personalizar

- **Textos e preços**: tudo está em `app/page.tsx`, nos arrays `FOLDERS`,
  `BENEFITS`, `TESTIMONIALS`, `FAQS` e nos blocos de preço em `<section id="planos">`.
- **Links**: no topo de `app/page.tsx` troque:
  - `WHATSAPP_LINK` → seu número (formato `https://wa.me/55DDDNUMERO`)
  - `CHECKOUT_BASICO` e `CHECKOUT_COMBO` → links do seu checkout/PIX
- **Cores**: todas em `app/globals.css`, no bloco `:root` no topo do arquivo
  (`--blue`, `--cyan`, `--bg`, etc). Troque os valores hex para mudar a
  identidade visual inteira.
- **Fontes**: importadas via Google Fonts em `app/layout.tsx`. Troque o
  link do `<link href="...">` para usar outras fontes.
- **Logo**: atualmente é um ícone SVG simples (raio). Troque o `<svg>`
  dentro de `.logo-mark` por uma tag `<img src="/sua-logo.png" />` — coloque
  o arquivo em `public/`.

## Build de produção

```bash
npm run build
npm run start
```

## Deploy

O projeto está pronto para deploy na Vercel, Netlify ou qualquer host que
suporte Next.js. Basta conectar o repositório e o build padrão (`npm run build`)
já funciona.

---

**Nota**: este projeto foi construído do zero com copy e design originais.
Não reutiliza código, textos ou imagens de nenhum site de terceiros.
