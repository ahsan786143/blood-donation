import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Blood Donation Website",
  description: "Donate blood, save lives.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
