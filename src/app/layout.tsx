import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "knowmemore.site",
  description: "Something is coming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
