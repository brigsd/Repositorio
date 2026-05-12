import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programa de Educação para Adultos",
  description:
    "Plataforma de letramento formal para adultos que não concluíram o ensino médio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-stone-50 text-stone-900 antialiased">
        {children}
      </body>
    </html>
  );
}
