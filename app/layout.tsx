import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
    title: "Clinical.",
    description: "Cuidamos de quem cuida das pessoas.",
    authors: [{ name: "João Vitor Benedet", url: "https://wa.me/5548991701454" }],
    generator: "Next.js",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            {/* 
                =======================================================
                Criado e Estruturado por João Vitor Benedet
                Fale comigo no WhatsApp: https://wa.me/5548991701454
                =======================================================
            */}
            <body className={`${inter.variable} ${montserrat.variable}`}>{children}</body>
        </html>
    );
}
