import Header from "@/components/Header";
import "./globals.css";
import { League_Spartan } from "next/font/google";
import Footer from "@/components/Footer";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-league-spartan",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${leagueSpartan.variable}`}>
      <body className="bg-black h-screen text-white container mx-auto font-league_spartan">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
