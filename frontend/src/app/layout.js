import "./globals.css";

export const metadata = {
  title: "PickWise",
  description: "Product Comparing webapp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bulma@1.0.0/css/bulma.min.css"
        />
      </head>
        <body>{children}</body>
    </html>
  );
}
