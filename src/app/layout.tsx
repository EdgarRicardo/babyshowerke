import "./globals.css";
import { lora, nunito } from "./fonts";
import { Suspense } from "react";
import Seo from "./components/Seo";
import InvitacionBabyShower from './components/InvitacionBabyShower';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Seo/>
      <body className={`${nunito.className} antialiased`}>
        <Suspense>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
