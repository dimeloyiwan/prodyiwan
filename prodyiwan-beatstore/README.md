# ProdYiwan — Beat Store (Next.js + Tailwind)

Proyecto listo para subir a **Vercel** sin tocar nada.

## Cómo desplegar
1. Ve a https://vercel.com → New Project → Import Project.
2. Arrastra esta carpeta o conéctala desde tu GitHub.
3. Vercel detectará Next.js y lo desplegará solo. Obtendrás un enlace tipo `*.vercel.app`.

## Desarrollo local
```bash
npm install
npm run dev
# abre http://localhost:3000
```

## Cambiar beats
Edita `app/page.jsx` → array `beats` (title, bpm, key, price, cover, src).
Usa previews con marca de agua y 128kbps. Los stems y WAV full solo tras pago.

## Notas de protección
- `controlsList="nodownload"` oculta el botón de descarga, pero ningún método web protege al 100% contra capturas.
- Considera servir los previews desde un CDN con URLs firmadas temporales.
