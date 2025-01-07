import Header from "@/components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black h-screen text-white container mx-auto">
        <Header />
        {children}
      </body>
    </html>
  );
}
