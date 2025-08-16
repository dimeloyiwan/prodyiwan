export const metadata = {
  title: "ProdYiwan — Beat Store",
  description: "Escucha, elige y compra licencias de beats de ProdYiwan.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
