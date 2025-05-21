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
      <Seo/>
      <body>
        <Suspense>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
