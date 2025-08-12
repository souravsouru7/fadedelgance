import "./globals.css";

export const metadata = {
  title: "Faded Elegance – Premium Restoration",
  description: "Fast, premium hero experience for restoration of damaged items.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
