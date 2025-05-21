import "./globals.css";
import { Suspense } from "react";
import Seo from "./components/Seo";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Cormorant+SC:wght@300;400;500;600;700&family=Tangerine:wght@400;700&display=swap&family=Knewave" rel="stylesheet" />
      </head>
      <Seo />
      <body>
        <Suspense>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
