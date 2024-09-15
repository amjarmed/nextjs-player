import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Link from 'next/link';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "nextjs player app",
  description: "learn and practise",
};

 function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir='ltr' className="text-gray-900 antialiased leading-tight">
      <body
      
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt-20 min-h-screen bg-gray-100 bg-gradient-to-r from-blue-500/50  to-green-500/50  h-screen flex justify-center items-center  content-center `}
      >

    <nav className={"text-center grid gird-cols-12  text-neutral-800 txt-lg fixed top-0 left-0 w-full"} >
      <ul className='w-11/12 mx-auto bg-neutral-950   p-5 flex justify-around shadow-lg text-neutral-200'>
      <li><Link href="/"> Home</Link></li>
        <li><Link href="/pages/about" > About</Link></li>
         <li><Link href="/pages/contact" > Contact</Link></li>
          <li><Link href="/pages/portfolio" > Portfolio</Link></li>
          <li><Link href="/pages/posts" > Blog</Link></li>
      </ul>
    </nav>
     <div className="wrapper flex-auto text-neutral-800">
        {children}

     </div>
      </body>
    </html>
  );
}

export default  RootLayout;