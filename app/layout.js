import "./globals.css";

export const metadata = {
  title: "Product Listing Page",
  description: "A simple product listing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
