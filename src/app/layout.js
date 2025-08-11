import "./globals.css";

export const metadata = {
  title: "Faded Elegance - GSAP Hero Section",
  description: "A stunning hero section with GSAP animations",
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
