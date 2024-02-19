import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import GSAPProvider from "@/app/components/GSAPProvider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Rick & Morty",
    description: "Wubba lubba dub dub",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <GSAPProvider/>
        <div>
            {children}
        </div>
        </body>
        </html>
    );
}
