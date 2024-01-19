import "./globals.scss";
import { Poppins } from "next/font/google";


const inter = Poppins({ 
  subsets: ["latin"],
   weight: ['300', '400', '500', '600']
   });

export const metadata = {
  title: 'Lucas Bueno Monteiro',
  description: "Lucas Bueno Monteiro Lucas is a software development student and an experienced digital marketing professional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
